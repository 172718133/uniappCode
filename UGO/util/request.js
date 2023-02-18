const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'

export const request = (option) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + option.url,
			method: option.method || 'GET',
			data: option.data || {},
			success: (res) => {
				if(res.data.meta.status !== 200) {
					uni.showToast({
						title: '获取数据失败！',
						icon: "error"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					icon: "error",
					title: '接口请求失败！'
				})
				reject(err)
			}
		})
	})
}