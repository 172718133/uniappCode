<template>
	<view class="cart">
		<view class="chooseAdd">
			<button type="default" @click="chooseAdd">选择收货地址</button>
		</view>
		<CartItem :cartList="cartList"></CartItem>
		<Pay :allCheck="allCheck" :totalNum="totalNum" :totalPrice="totalPrice"></Pay>
	</view>
</template>

<script>
	import GoodsItem from '@/components/Goods_item/goods_item.vue'
	import NumChange from '@/components/Num_change/num_change.vue'
	import CartItem from '@/components/Cart_item/cart_item.vue'
	import Pay from '@/components/Pay/pay.vue'
	export default {
		data() {
			return {
				cartList: [],
				allCheck: false,
				totalPrice: 999,
				totalNum: 100
			}
		},
		components: {
			GoodsItem,
			NumChange,
			CartItem,
			Pay
		},
		onShow() {
			this.cartList = uni.getStorageSync('carts')
		},
		methods: {
			chooseAdd(){
				uni.chooseAddress({
					success: (res) => {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.cart {
		min-height: 100vh;
		background-color: #f2f2f2;
		.chooseAdd {}
	}
</style>
