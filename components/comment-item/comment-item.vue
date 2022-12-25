<template>
	<view>
		<view class="comment-item" @click="goReply">
			<view class="avatar">
				<u-avatar :src="giveAvatar(item)" size="26">
				</u-avatar>
			</view>
			<view class="wrap">
				<view class="username">
					{{giveName(item)}}
					<text class="iconfont icon-a-43-guanbi" @click.stop="delComment" v-if="!closeBtn"></text>
				</view>
				<view class="comment-content">{{item.comment_content}}</view>
				<view class="info">
					<view class="reply-btn" v-if="!childState">{{item.totalReply ? item.totalReply + '回复': '回复'}}</view>
					<uni-dateformat :date="item.comment_date" :threshold="[60000,3600000*24*30]"></uni-dateformat>
					<view style="padding-left: 20rpx;">{{item.province}}</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	const utilsObj = uniCloud.importObject('utilsObj', { customUI: true })
	import { giveName, likeFun, giveAvatar } from '../../utils/tools.js'
	export default {
		name: "comment-item",
		data() {
			return {}
		},
		props: {
			item: {
				type: Object,
				default () { return {} }
			},
			childState: {
				type: Boolean,
				default: false
			},
			closeBtn: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			// 跳转到回复页面
			goReply() {
				if (this.childState) return
				uni.setStorageSync('replyItem', this.item)
				uni.navigateTo({
					url: '/pages/reply/reply'
				})
			},
			// -------------------------
			giveName,
			giveAvatar,
			delComment() {
				let uid = uniCloud.getCurrentUserInfo().uid
				if (uid === this.item.user_id[0]._id || this.uniIDHasRole('admin') || this.uniIDHasRole('webmaster')) {
					uni.showModal({
						title: '确认删除吗？',
						cancelText: '取消',
						confirmText: '确认',
						success: res => {
							if (res.confirm) {
								this.removeComment()
								return
							}
							if (res.cancel) return
						}
					})
					return
				}
				uni.showToast({
					title: '只能删除自己的评论',
					icon: 'none'
				});
			},
			removeComment() {
				db.collection('quanzi_comment').doc(this.item._id).remove()
					.then(res => {
						console.log(res);
						this.$emit('removeEnv', { id: this.item._id })
						utilsObj.operation('quanzi_article', 'comment_count', this.item.article_id, -1)
						uni.showToast({
							title: '删除成功',
							icon: 'none'
						})
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-item {
		display: flex;

		.wrap {
			flex: 1;
			padding-left: 20rpx;
			padding-bottom: 20rpx;

			.username {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-right: 20px;
				font-size: 26rpx;
				color: #666;
				padding: 10rpx 0;

				.iconfont {
					font-size: 20rpx;
					padding: 10rpx;
					color: #999;
				}
			}

			.comment-content {
				font-size: 34rpx;
				color: #111;
				line-height: 1.8em;
			}

			.info {
				font-size: 26rpx;
				color: #666;
				display: flex;
				padding: 10rpx 0;
				align-items: center;

				view {
					margin-right: 25rpx;
				}

				.reply-btn {
					padding: 6rpx 18rpx;
					background: #e4e4e4;
					border-radius: 30rpx;
				}
			}
		}
	}
</style>
