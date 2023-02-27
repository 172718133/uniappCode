// 定义接口根路径
const BASE_URL = 'http://api-hmugo-web.itheima.net/api/public/v1'

// 请求开始就让参数+1，请求结束后-1，当所有请求全部返回数据之后，参数变为0，才取消加载提示
let requestTime = 0

// 封装request请求方法
export const request = (option) => {
	requestTime++
	uni.showLoading({
		title: '加载中'
	})
	// 返回Promise方法，异步请求，有resolve, reject两个方法
	return new Promise((resolve, reject) => {
		// 请求接口API
		uni.request({
			// 让根路径和传进来的路径进行拼接
			url: BASE_URL + option.url,
			// 请求方法，若没有传则为GET
			method: option.method || 'GET',
			// 请求数据，若没有传则为空对象
			data: option.data || {},
			// 请求成功后的回调
			success: (res) => {
				// 请求数据成功data.meta.status为200
				if(res.data.meta.status !== 200) {
					uni.showToast({
						title: '获取数据失败！',
						icon: "error"
					})
				}
				// resolve返回成功的数据
				resolve(res)
			},
			// 请求失败的回调
			fail: (err) => {
				uni.showToast({
					icon: "error",
					title: '接口请求失败！'
				})
				reject(err)
			},
			// 请求结束的回调
			complete: () => {
				requestTime--
				if(requestTime === 0) {
					uni.hideLoading()
					uni.stopPullDownRefresh()
				}
			}
		})
	})
}