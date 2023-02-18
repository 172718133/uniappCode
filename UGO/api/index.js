import {request} from '@/util/request.js'

export const getSwiperAPI = () => {
	return request({
		url: '/home/swiperdata'
	})
}

export const getCatitemAPI = () => {
	return request({
		url: '/home/catitems'
	})
}