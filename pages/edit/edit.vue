<template>
	<view class="edit">
		<view class="title">
			<input type="text" placeholder="请输入文章标题" placeholder-class="placeholderClass" v-model="artObj.title">
		</view>
		<view class="content">
			<editor class="myEdit" placeholder="请输入文章内容" show-img-size show-img-resize show-img-toolbar @ready="onEditReady" @focus="onFocus"
				@statuschange="onStatuschange">
			</editor>
		</view>
		<view class="btnGroup">
			<u-button type="primary" text="确认发表" :disabled="!artObj.title.length" @click="onSubmit"></u-button>
		</view>
		<view class="tools" v-if="toolShow">
			<text class="iconfont icon-zitibiaoti" @click="clickHead" :class="headShow? 'active':'' "></text>
			<text class="iconfont icon-zitijiacu" @click="clickBold" :class="boldShow? 'active':'' "></text>
			<text class="iconfont icon-zitixieti" @click="clickItalic" :class="italicShow?'active':'' "></text>
			<text class="iconfont icon-fengexian" @click="clickDivider"></text>
			<text class="iconfont icon-charutupian" @click="clickInsertImage"></text>
			<text class="iconfont icon-duigou_kuai" @click="editOk"></text>
		</view>
	</view>
</template>

<script>
	import { getImgSrc, getProvince } from '../../utils/tools.js'
	const db = uniCloud.database()
	export default {
		data() {
			return {
				toolShow: false,
				headShow: false,
				boldShow: false,
				italicShow: false,
				artObj: { title: '', content: '', description: '', picurls: '', province: '' }
			};
		},
		onLoad() {
			getProvince().then(res => {
				this.artObj.province = res
			})
		},
		methods: {
			onEditReady() {
				uni.createSelectorQuery().in(this).select('.myEdit').fields({
					size: true,
					context: true,
				}, (res) => {
					//editorCtx是editor组件实例
					this.editorCtx = res.context
				}).exec()
			},
			onFocus() {
				this.toolShow = true
			},
			// 添加大标题
			clickHead() {
				this.headShow = !this.headShow
				this.editorCtx.format('header', this.headShow ? 'H2' : false)
			},
			// 加粗
			clickBold() {
				this.boldShow = !this.boldShow
				this.editorCtx.format('bold')
			},
			// 倾斜
			clickItalic() {
				this.italicShow = !this.italicShow
				this.editorCtx.format('italic')
			},
			// 对勾
			editOk() { this.toolShow = false },
			// 添加分割线
			clickDivider() {
				this.editorCtx.insertDivider()
			},
			// 样式发生改变
			onStatuschange(e) {
				let detail = e.detail
				console.log(detail, 'detail');
				this.checkStatus('header', detail, 'headShow')
				this.checkStatus('bold', detail, 'boldShow')
				this.checkStatus('italic', detail, 'italicShow')
			},
			checkStatus(name, detail, obj) {
				if (detail.hasOwnProperty(name)) {
					this[obj] = true
				} else { this[obj] = false }
			},
			// 添加图像
			clickInsertImage() {
				uni.chooseImage({
					success: async (e) => {
						uni.showLoading({ title: '正在加载', mask: true })
						for (let item of e.tempFiles) {
							let suffix = item.path.substring(item.path.lastIndexOf("."))
							let randomName = Date.now() + String(Math.random()).substr(3, 6) + suffix
							const res = await uniCloud.uploadFile({
								filePath: item.path,
								cloudPath: item.name || randomName
							})
							this.editorCtx.insertImage({ src: res.fileID })
						}
						uni.hideLoading()
					}
				})
			},
			// 发布
			onSubmit() {
				this.editorCtx.getContents({
					success: (res) => {
						this.artObj.content = res.html
						this.artObj.description = res.text.slice(0, 80)
						this.artObj.picurls = getImgSrc(res.html, 3)
						console.log(this.artObj);
						uni.showLoading({
							title: '发布中'
						})
						this.addData()
					}
				})
			},
			addData() {
				db.collection('quanzi_article').add({ ...this.artObj }).then((res) => {
					console.log(res);
					uni.hideLoading()
					uni.showToast({
						title: '数据添加成功'
					})
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}, 800)
				})
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .ql-blank::before {
		font-style: normal;
		color: #e0e0e0;
	}

	.edit {
		padding: 30rpx;

		.title {
			input {
				height: 120rpx;
				font-size: 46rpx;
				border-bottom: 1px solid #e4e4e4;
				margin-bottom: 30rpx;
				color: #000;
			}

			.placeholderClass {
				color: #e0e0e0;
			}
		}

		.content {
			.myEdit {
				height: calc(100vh - 500rpx);
				margin-bottom: 30rpx;
			}
		}

		.tools {
			width: 100%;
			height: 80rpx;
			background: #fff;
			border-top: 1rpx solid #f4f4f4;
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.iconfont {
				font-size: 36rpx;
				color: #333;

				&.active {
					color: #0199FE
				}
			}
		}
	}
</style>
