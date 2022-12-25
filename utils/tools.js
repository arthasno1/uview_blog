//获取富文本内的图片url地址
export function getImgSrc(richtext, num = 3) {
	let imgList = [];
	richtext.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture, a, b) => {
		console.log(match, 'match');
		console.log(capture, 'capture');
		console.log(a);
		console.log(b);
		imgList.push(capture);
	});
	imgList = imgList.slice(0, num)
	return imgList;
}

//向外导出省份
export function getProvince() {
	return new Promise((resolve, reject) => {
		let historyProvince = uni.getStorageSync("historyProvince");
		if (historyProvince) {
			if ((Date.now() - historyProvince.time) > 1000 * 60 * 60) {
				console.log('超过一小时重新发送网络请求');
				getIp().then(res => {
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			} else {
				console.log('直接读取缓存');
				resolve(historyProvince.province);
			}
		} else {
			getIp().then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		}
	})
}

//获取所在省市
function getIp() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: "https://restapi.amap.com/v3/ip?key=a7dd3edd8e3ff432ce1e09631096eb67",
			success: res => {
				let str = ""
				typeof(res.data.province) == "string" ? str = res.data.province: str = "火星"
				resolve(str)
				let obj = {
					province: str,
					time: Date.now()
				}
				uni.setStorageSync("historyProvince", obj);
			},
			fail: err => {
				reject(err)
			}
		})
	})
}

//获取昵称
export function giveName(item) {
	return item.user_id[0].nickname || item.user_id[0].username || item.user_id[0].mobile || '请设置昵称'
}
//获取头像
export function giveAvatar(item) {
	return item.user_id[0]?.avatar_file?.url ?? '../../static/images/user-default.jpg'
}

// 点赞操作
const db = uniCloud.database()
const utilsObj = uniCloud.importObject('utilsObj', { customUI: true })
export async function likeFun(artid) {
	let count = await db.collection('quanzi_like').where(
		`article_id=='${artid}' && user_id==$cloudEnv_uid`).count()
	console.log(count);
	if (count.result.total) {
		db.collection('quanzi_like').where(`article_id=='${artid}' && user_id==$cloudEnv_uid`).remove()
		utilsObj.operation('quanzi_article', 'like_count', artid, -1)
	} else {
		db.collection('quanzi_like').add({
			article_id: artid
		})
		utilsObj.operation('quanzi_article', 'like_count', artid, 1).then(res => {
			console.log(res);
		})
	}
}
