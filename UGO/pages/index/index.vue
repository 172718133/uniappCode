<template>
	<view class="index">
		<div class="swiper">
			<swiper indicator-dots circular autoplay interval="3000" duration="500">
				<swiper-item v-for="item in swiperList">
					<view class="swiper-item">
						<image :src="item.image_src" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</div>
	</view>
</template>

<script>
	import { getSwiperAPI, getCatitemAPI } from '@/api/index.js'
	export default {
		data() {
			return {
				swiperList: {},
				catitemList: {}
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
				console.log(this.catitemList);
			}
		},
		onLoad() {
			this.getSwiper(),
			this.getCatitem()
		}
	}
</script>

<style lang="less" scoped>
	.swiper-item {
		width: 100%;
		image {
			width: 100%;
		}
	}
</style>
