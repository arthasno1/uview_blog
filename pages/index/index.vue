<template>
	<view class="home">
		<view class="topnav">
			<u-tabs :list="navList" @click="clickTabs" :activeStyle="{ color: '#333', fontWeight: 'bold',transform: 'scale(1.08)'}" :inactiveStyle="{color: '#888',transform: 'scale(1)'
			}">
			</u-tabs>
		</view>
		<!-- 骨架屏 -->
		<view class="loadingState">
			<u-skeleton rows="4" title loading v-if="loadingState"></u-skeleton>
		</view>
		<view class="content">
			<view class="item" v-for="item,index in dataList" :key="item._id">
				<blog-item @delEvent='P_delEvent' :item="item" :isLike.sync="item.isLike" :like_count.sync="item.like_count"></blog-item>
			</view>
		</view>
		<view class="edit">
			<text class="iconfont icon-a-21-xiugai" @click="gotoEdit"></text>
		</view>
		<uni-load-more :status="loadingShow"></uni-load-more>
	</view>
</template>

<script>
	import { store, mutations } from '@/uni_modules/uni-id-pages/common/store.js'
	const db = uniCloud.database()
	const dbCmd = db.command
	export default {
		data() {
			return {
				loadingShow: 'loading',
				noMore: false,
				navList: [{
						name: '最新',
						type: 'publish_date'
					},
					{
						name: '热门',
						type: 'view_count'
					},
				],
				navAction: 0,
				loadingState: true,
				dataList: []
			}
		},
		async onLoad() {
			this.getData()
		},
		onReachBottom() {
			this.loadingShow = 'loading'
			if (this.noMore == true) {
				this.loadingShow = 'nomore'
				return false
			}
			this.getData()
		},
		onPullDownRefresh() {
			this.dataList = []
			this.getData()
			uni.stopPullDownRefresh()
		},
		methods: {
			async getData() {
				const artTemp = db.collection('quanzi_article').where(`delState!=true`).field(
					'title,user_id,description,picurls,view_count,like_count,comment_count,publish_date').getTemp()
				const userTemp = db.collection('uni-id-users').field('_id,username,nickname,avatar_file').getTemp()
				db.collection(artTemp, userTemp).orderBy(this.navList[this.navAction].type, 'desc').skip(this.dataList.length).limit(5).get().then(
					async res => {
						let idArr = []
						let resDataArr = res.result.data
						// 登录后进行下面操作
						if (store.hasLogin) {
							resDataArr.forEach((item) => {
								idArr.push(item._id)
							})
							let likeRes = await db.collection('quanzi_like').where({
								article_id: dbCmd.in(idArr),
								user_id: uniCloud.getCurrentUserInfo().uid
							}).get()
							likeRes.result.data.forEach((item) => {
								let findIndex = resDataArr.findIndex((find) => {
									return item.article_id == find._id
								})
								resDataArr[findIndex].isLike = true
							})
						}
						// ——————————————————————————————————
						this.dataList = [...this.dataList, ...resDataArr]
						this.loadingState = false
						this.loadingShow = 'more'
						if (res.result.data.length == 0) {
							this.noMore = true
							this.loadingShow = 'noMore'
							return
						}
						console.log(this.dataList, 'dataList');
					})
			},
			clickTabs(e) {
				console.log('e', e)
				this.navAction = e.index
				this.loadingState = true
				this.loadingShow = 'more'
				this.noMore = false
				this.dataList = []
				this.getData()
			},
			gotoEdit() {
				uni.navigateTo({
					url: "/pages/edit/edit"
				})
			},
			P_delEvent(id) {
				console.log(id);
				this.dataList = this.dataList.filter((item) => {
					return item._id !== id
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.home {
		.topnav {
			margin-bottom: 30rpx;
		}

		.content {
			.item {
				padding: 30rpx;
				border-bottom: #F7F7F7 15rpx solid
			}
		}

		.edit {
			width: 120rpx;
			height: 120rpx;
			background: #0199FE;
			border-radius: 50%;
			color: #fff;
			position: fixed;
			z-index: 100;
			bottom: 150rpx;
			right: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 0 0 20rpx rgba(1, 153, 254, 0.8);

			.iconfont {
				font-size: 50rpx;
			}
		}
	}
</style>
