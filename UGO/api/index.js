import {request} from '@/util/request.js'

/**
 * 获取轮播图
 */
export const getSwiperAPI = () => {
	return request({
		url: '/home/swiperdata'
	})
}

/**
 * 获取导航
 */
export const getCatitemAPI = () => {
	return request({
		url: '/home/catitems'
	})
}

/**
 * 获取楼层
 */
export const getFloorAPI = () => {
	return request({
		url: '/home/floordata'
	})
}

/**
 * 搜索列表
 */
export const getSearchListAPI = (query) => {
	return request({
		url: '/goods/qsearch',
		data: {
			query
		}
	})
}

/**
 * 获取分类列表数据
 */
export const getCategoryListAPI = () => {
	return request({
		url: '/categories'
	})
}

/**
 * 获取商品列表
 * query,cid,pagenum,pagesize 关键字、分类di、页码、页容量
 */
export const getGoodsListAPI = ({query, cid, pagenum, pagesize}) => {
	return request({
		url: '/goods/search',
		data: {
			query,
			cid,
			pagenum,
			pagesize
		}
	})
}