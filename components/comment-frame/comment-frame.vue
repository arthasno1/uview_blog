<template>
	<view>
		<view class="commentFrame">
			<uni-easyinput ref="uipt" @confirm="goComment" suffixIcon="paperplane" v-model="replyContent" :placeholder="placeholder"
				@iconClick="goComment" focus>
			</uni-easyinput>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	const utilsObj = uniCloud.importObject('utilsObj', { customUI: true })
	import { getProvince } from '../../utils/tools.js'
	export default {
		name: "comment-frame",
		data() {
			return {
				replyContent: '',
				placeholder: this.placeHolder
			};
		},
		props: {
			commentObj: {
				type: Object,
				default () { return {} }
			},
			placeHolder: { type: String, default: '评论点什么吧' }
		},
		methods: {
			async goComment() {
				if (!this.replyContent) {
					uni.showToast({
						title: '内容不能为空',
						icon: 'none',
					});
					return
				}
				let province = await getProvince()
				db.collection('quanzi_comment').add({
					comment_content: this.replyContent,
					province: province,
					...this.commentObj
				}).then(res => {
					uni.showToast({
						title: '评论成功',
						icon: 'success'
					})
					this.$emit('commentEnv', {
						_id: res.result.id,
						comment_content: this.replyContent,
						province: province,
						comment_date: Date.now()
					})
					this.replyContent = ''
					utilsObj.operation('quanzi_article', 'comment_count', this.commentObj.article_id, 1)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.commentFrame {
		width: 100%;
		background: #fff;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 100;
	}
</style>
