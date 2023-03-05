<template>
	<view class="collect">
		<GoodsItem :goodsList="collectList"></GoodsItem>
	</view>
</template>

<script>
	import GoodsItem from '@/components/Goods_item/goods_item.vue'
	export default {
		data() {
			return {
				collectList: []
			}
		},
		components: {
			GoodsItem
		},
		methods: {
			
		},
		onShow () {
			this.collectList = uni.getStorageSync('collect') || []
		}
	}
</script>

<style>

</style>
