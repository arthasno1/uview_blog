<template>
	<view class="blogitem">
		<view class="head">
			<view class="userinfo">
				<!-- 头像 -->
				<view class="avatar">
					<image :src="giveAvatar(item)" mode="aspectFill">
					</image>
				</view>
				<!-- 用户名 -->
				<view class="name">
					{{giveName(item)}}
				</view>
				<!-- 日期 -->
				<view class="time">
					<uni-dateformat :date="item.publish_date" format="MM月dd hh:mm" :threshold="[60000,3600000*24*30]"></uni-dateformat>
				</view>
			</view>
			<!-- 更多按钮 -->
			<view class="more" @click="clickMore">
				<text class="iconfont icon-ellipsis"></text>
			</view>
		</view>
		<!-- 主体 -->
		<view class="body">
			<view class="title" @click="gotoDetail">{{item.title}}
			</view>
			<view class="text" @click="gotoDetail" v-if="item.description">
				<view class="t">{{item.description}}</view>
			</view>
			<!-- 图片区 -->
			<view class="piclist" v-if="item.picurls.length">
				<view class="pic" :class="item.picurls.length==1 ? 'only':'' " v-for="pic,index in item.picurls" :key="pic">
					<image :src="pic" mode="aspectFill" @click="clickPic(index)"></image>
				</view>
			</view>
		</view>
		<view class="info">
			<view class="box">
				<text class="iconfont icon-a-27-liulan"></text>
				<text>{{item.view_count}}</text>
			</view>
			<view class="box">
				<text class="iconfont icon-a-5-xinxi" @click="gotoDetail"></text>
				<text>{{item.comment_count &&item.comment_count>0 ? item.comment_count:'评论'}}</text>
			</view>
			<view class="box" :class="item.isLike ? 'active' : '' " @click="clickLike">
				<text class="iconfont icon-a-106-xihuan"></text>
				<text>{{item.like_count ? item.like_count :'点赞'}}</text>
			</view>
		</view>
		<u-action-sheet :actions="list" :cancelText="'取消'" :show="sheetShow" :closeOnClickAction="true" :closeOnClickOverlay="true"
			@select="sheetSelect" @close="sheetClose"></u-action-sheet>
	</view>
</template>

<script>
	const db = uniCloud.database()
	import { giveName, giveAvatar, likeFun } from '../../utils/tools.js'
	import { store } from '../../uni_modules/uni-id-pages/common/store.js'
	import pagesJson from '@/pages.json'
	export default {
		name: "blog-item",
		data() {
			return {
				list: [{
					name: '修改',
					disabled: true
				}, {
					name: '删除',
					color: '#ff0023',
					disabled: true
				}, ],
				sheetShow: false,
				likeTime: Date.now()
			}
		},
		props: {
			item: {
				type: Object,
				default () { return {} }
			},
			isLike: Boolean,
			like_count: Number
		},
		mounted() {
			if (this.item.comment_count < 0) {
				db.collection('quanzi_article').doc(this.item._id).update({ comment_count: 0 })
				console.log('修改comment_count为0');
			}
		},
		methods: {
			// 取消弹窗
			sheetClose() {
				this.sheetShow = false
			},
			// 选择弹窗
			sheetSelect(e) {
				if (e.name == '删除') {
					this.delFun()
				}
				this.sheetShow = false
			},
			// 点击弹窗删除操作
			delFun() {
				uni.showLoading({
					title: '加载中',
				})
				db.collection('quanzi_article').doc(this.item._id).remove().then(
					res => {
						uni.hideLoading()
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						})
						this.$emit('delEvent', this.item._id)
					}
				).catch(error => {
					uni.hideLoading()
					console.log(error);
				})
			},
			// 调出弹窗
			clickMore() {
				let uid = uniCloud.getCurrentUserInfo().uid
				if (uid === this.item.user_id[0]._id || this.uniIDHasRole('admin') || this.uniIDHasRole('webmaster')) {
					this.list.forEach((item) => {
						item.disabled = false
					})
				}
				this.sheetShow = true
			},
			giveName(item) {
				return giveName(item)
			},
			giveAvatar(item) {
				return giveAvatar(item)
			},
			clickPic(index) {
				uni.previewImage({
					urls: this.item.picurls,
					current: index
				})
			},
			gotoDetail() {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${this.item._id}`
				})
			},
			async clickLike() {
				if (!store.hasLogin) {
					return uni.showModal({
						title: '登陆之后才能点赞',
						content: '确定登陆吗？',
						success: (res) => {
							if (res.confirm) {
								uni.navigateTo({
									url: "/" + pagesJson.uniIdRouter.loginPage
								})
							}
						}
					})
				}
				let time = Date.now()
				if (time - this.likeTime < 1000) {
					uni.showToast({
						title: '请不要频繁点击',
						icon: 'none'
					})
					return
				}
				this.likeTime = time
				// this.item.isLike = !this.item.isLike
				let isLike = !this.item.isLike
				this.$emit('update:isLike', isLike)
				// this.item.isLike ? this.item.like_count++ : this.item.like_count--
				let like_count = this.item.like_count
				this.item.isLike ? like_count++ : like_count--
				this.$emit('update:like_count', like_count)
				likeFun(this.item._id)
			}
		}
	}
</script>

<style lang="scss">
	.blogitem {
		.head {
			display: flex;
			font-size: 32rpx;
			align-items: center;
			justify-content: space-between;

			.userinfo {
				display: flex;
				align-items: center;

				.avatar {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					border-radius: 50%;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}

				.name {
					color: #222;
					padding-left: 10rpx;
				}

				.time {
					color: #888;
					font-size: 22rpx;
					padding-left: 20rpx;
				}
			}

			.more {
				padding: 5rpx;

				.iconfont {
					font-size: 50rpx;
					color: #888;
				}
			}
		}

		.body {
			padding: 15rpx 0 30rpx;

			.title {
				font-size: 44rpx;
				color: #000;
				font-weight: 600;
				text-align: justify;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.text {
				padding-top: 10rpx;
				padding-bottom: 10rpx;
				font-size: 30rpx;
				text-align: justify;
				color: #888;

				.t {
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.piclist {
				display: flex;
				padding-top: 20rpx;

				.pic {
					width: 225rpx;
					height: 225rpx;
					margin-right: 6rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}

					&:first-child {
						border-radius: 20rpx 0 0 20rpx;
					}

					&:last-child {
						border-radius: 0 20rpx 20rpx 0;
					}

					&.only {
						border-radius: 20rpx;
					}

				}

			}
		}

		.info {
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 26rpx;
			color: #333;

			.box {
				display: flex;
				align-items: center;
				padding: 15rpx 0 5rpx;
				flex: 1;
				justify-content: center;

				.iconfont {
					font-size: 40rpx;
					padding-right: 10rpx;
				}
			}

			.box.active {
				color: #0199FE
			}

		}

	}
</style>
