<template>
	<view class="index">
		<!-- 轮播图 -->
		<div class="swiper">
			<swiper indicator-dots circular autoplay interval="3000" duration="500" indicator-active-color="#fff">
				<swiper-item v-for="item in swiperList" :key="item.goods_id">
					<view class="swiper-item">
						<image :src="item.image_src" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</div>
		<!-- 导航 -->
		<div class="cat">
			<div class="catitem" v-for="item in catitemList" :key="item.name">
				<image :src="item.image_src" mode="widthFix"></image>
			</div>
		</div>
	</view>
</template>

<script>
	import { getSwiperAPI, getCatitemAPI, getFloorAPI } from '@/api/index.js'
	export default {
		data() {
			return {
				swiperList: {},
				catitemList: {},
				floorList: {}
			}
		},
		methods: {
			async getSwiper () {
				const {data: res} = await getSwiperAPI()
				this.swiperList = res.message
			},
			async getCatitem () {
				const {data: res} = await getCatitemAPI()
				this.catitemList = res.message
			},
			async getFloor () {
				const {data: res} = await getFloorAPI()
				this.floorList = res.message
				console.log(this.floorList);
			}
		},
		onLoad() {
			this.getSwiper()
			this.getCatitem()
			this.getFloor()
		}
	}
</script>

<style lang="less" scoped>
	.swiper swiper {
		width: 100%;
		height: 340rpx;
		.swiper-item {
			// width: 100%;
			image {
				width: 100%;
			}
		}
	}
	.cat {
		display: flex;
		margin: 10px 0;
		.catitem {
			text-align: center;
			flex: 1;
			image {
				width: 160rpx;
			}
		}
	}
</style>
