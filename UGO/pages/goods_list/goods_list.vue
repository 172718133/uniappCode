<template>
	<view class="goods_list">
		<Search :text="'点击搜索'"></Search>
		<NavBar class="navbar" :navList="['综合', '销量', '价格']" @tabchange="tabChange"></NavBar>
		<GoodsItem :goodsList="goodsList"></GoodsItem>
		<view class="toTop" v-show="showTop" @click="toTop">
			<image src="../../static/imgs/top.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import Search from '@/components/Search/search.vue'
	import NavBar from '@/components/NavBar/navbar.vue'
	import GoodsItem from '@/components/Goods_item/goods_item.vue'
	
	import { getGoodsListAPI } from '@/api/index.js'
	export default {
		data() {
			return {
				params: {
					query: '',
					cid: '',
					pagenum: 1,
					pagesize: 10
				},
				goodsList: [],
				totalPage: 0,
				showTop: false
			}
		},
		components: {
			Search,
			NavBar,
			GoodsItem
		},
		methods: {
			// 获取商品列表信息
			async getGoodsList() {
				const { data: res } = await getGoodsListAPI(this.params)
				// 总页码，总条数/每一页的条数。Math.ceil为向上取整（3.9取4）
				this.totalPage = Math.ceil(res.message.total / this.params.pagesize)
				this.goodsList = [...this.goodsList, ...res.message.goods]
				console.log(this.goodsList);
			},
			// 监听navbar的切换
			tabChange (val) {
				if (val === 0) {
					this.goodsList = this.goodsList.sort((a, b) => {
						return (b.goods_id-a.goods_id)
					})
				} else if (val === 1) {
					this.goodsList = this.goodsList.sort((a, b) => {
						return (a.add_time-b.add_time)
					})
				} else if (val === 2) {
					this.goodsList = this.goodsList.sort((a, b) => {
						return (a.goods_price-b.goods_price)
					})
				}
				
			},
			// 监听加载下一页
			loadMore () {
				// 页码加1
				this.params.pagenum++
				this.getGoodsList()
			},
			// 返回顶部图标点击事件
			toTop () {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			}
		},
		onLoad(option) {
			this.params.query = option.query
			this.params.cid = option.cid
			this.getGoodsList()
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			// 重置页码为1
			this.params.pagenum = 1
			// 重置数组为空
			this.goodsList = []
			this.getGoodsList()
		},
		// 监听上拉加载
		onReachBottom() {
			// 判断如果当前的页码比总页码大，就不请求下一页数据了，提示没有更多
			if (this.params.pagenum >= this.totalPage) {
				uni.showToast({
					title: '没有更多了哦~',
					icon: 'none'
				})
			} else {
				this.loadMore()
			}
		},
		// 监听页面滚动
		onPageScroll (position) {
			// 页面上滑的距离大于500，showTop变为true
			this.showTop = position.scrollTop > 500
		}
	}
</script>

<style lang="less" scoped>
	.goods_list {
		.navbar {
			margin-top: 80rpx;
		}
		.toTop {
			width: 120rpx;
			height: 120rpx;
			position: fixed;
			bottom: 50rpx;
			right: 30rpx;
			image {
				width: 100%;
			}
		}
	}
</style>
