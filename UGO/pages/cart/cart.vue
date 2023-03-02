<template>
	<view class="cart">
		<view class="chooseAdd">
			<button type="default" @click="chooseAdd">选择收货地址</button>
		</view>
		<view class="cart_main">
			<view class="cart_item" v-for="item in cartList" :key="item.goods_id">
				<view class="item_check">
					<checkbox-group name="">
						<label>
							<checkbox :checked="item.checked" color="#5cdedb" style="transform:scale(0.8)"/>
						</label>
					</checkbox-group>
				</view>
				<navigator :url="'../goods_detail/main?goods_id=' + item.goods_id" class="item_img">
					<image :src="item.goods_big_logo" mode="widthFix"></image>
				</navigator>
				<view class="item_info">
					<view class="info_title">
						{{item.goods_name}}
					</view>
					<view class="info_main">
						<view class="item_price">
							￥{{item.goods_price}}
						</view>
						<NumChange :num="item.num"></NumChange>
					</view>
				</view>
			</view>
		</view>
		<view class="pay">
			<checkbox-group name="" class="checkbox">
				<label>
					<checkbox :checked="allCheck" color="#5cdedb" style="transform:scale(0.8)" />
					<text>全选</text>
				</label>
			</checkbox-group>
			<view class="totalPrice">
				合计:￥
				<span>{{totalPrice}}</span>
			</view>
			<view class="totalNum">
				结算({{totalNum}})
			</view>
		</view>
	</view>
</template>

<script>
	import GoodsItem from '@/components/Goods_item/goods_item.vue'
	import NumChange from '@/components/Num_change/num_change.vue'
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
			NumChange
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
		.cart_main {
			padding: 10rpx;
			.cart_item {
				display: flex;
				padding: 20rpx;
				background-color: #fff;
				border-radius: 20rpx;
				margin-bottom: 10rpx;
				.item_check {
					flex: 0.8;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.item_img {
					flex: 2;
					text-align: center;
					min-width: 100rpx;
					max-width: 180rpx;
					image {
						width: 90%;
						height: 90%;
					}
				}
				.item_info {
					flex: 5;
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.info_title {
						font-size: 26rpx;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
					}
					.info_main {
						display: flex;
						justify-content: space-between;
						.item_price {
							color: red;
							font-size: 28rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
		.pay {
			display: flex;
			align-items: center;
			height: 120rpx;
			padding: 20rpx;
			background-color: #fff;
			position: fixed;
			bottom: 92rpx;
			left: 0;
			right: 0;
			.checkbox {
				flex: 1.6;
				display: flex;
				justify-content: center;
				align-items: center;
				text {
					font-size: 26rpx;
					color: #999;
				}
			}
			.totalPrice {
				flex: 5;
				text-align: right;
				margin-right: 20rpx;
				font-size: 28rpx;
				span {
					font-size: 34rpx;
					font-weight: bold;
					color: red;
				}
			}
			.totalNum {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: bold;
				color: #fff;
				border-radius: 50rpx;
				background: linear-gradient(to right, #6afffb, #5cdedb);
				flex: 2.6;
			}
		}
	}
</style>
