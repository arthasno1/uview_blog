<template>
	<view class="reply">
		<view class="top">
			<comment-item :item="replyItem" :closeBtn="true" :childState="true"></comment-item>
		</view>
		<view class="list">
			<view class="row" v-for="item in childReplyArr" :key="item._id">
				<comment-item @removeEnv="commentEnv" :childState="true" :item="item"></comment-item>
			</view>
		</view>
		<view>
			<comment-frame @commentEnv="commentEnv" :commentObj="commentObj" :placeHolder="`回复${giveName(this.replyItem)}`"></comment-frame>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	import { giveName, giveAvatar } from '../../utils/tools.js'
	export default {
		data() {
			return {
				replyItem: {},
				commentObj: {
					article_id: '',
					comment_type: 1,
					reply_user_id: '',
					reply_comment_id: ''
				},
				childReplyArr: []
			}
		},
		onLoad() {
			let replyItem = uni.getStorageSync('replyItem')
			if (!replyItem) return uni.navigateBack({})
			this.replyItem = replyItem || {}
			this.commentObj.article_id = this.replyItem.article_id
			this.commentObj.reply_user_id = this.replyItem.user_id[0]._id
			this.commentObj.reply_comment_id = this.replyItem._id
			console.log(this.replyItem);
			this.getComment()
		},
		onUnload() {
			uni.removeStorageSync('replyItem')
		},
		methods: {
			// 评论成功后的回调
			commentEnv() {
				this.childReplyArr = []
				this.getComment()
			},
			// ___________
			giveName,
			giveAvatar,
			// 获取评论列表
			getComment() {
				let commentTemp = db.collection('quanzi_comment')
					.where(`article_id=='${this.replyItem.article_id}' && comment_type==1 && reply_comment_id=='${this.commentObj.reply_comment_id}'`)
					.orderBy('comment_date desc')
					.limit(10).getTemp()
				let userTemp = db.collection('uni-id-users').field('avatar_file,_id,nickname,username').getTemp()
				db.collection(commentTemp, userTemp).get()
					.then(res => {
						console.log(res.result.data);
						this.childReplyArr = res.result.data
					})
			},
			// _____________________
		}
	}
</script>

<style lang="scss">
	.reply {
		.top {
			padding: 30rpx;
			border-bottom: 15rpx solid #eee;
		}

		.list {
			padding: 30rpx 60rpx;
			padding-bottom: 120rpx;

			.row {
				padding-bottom: 15rpx;
			}
		}
	}
</style>
