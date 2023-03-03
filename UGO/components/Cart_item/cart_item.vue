<template>
	<view class="cart_main">
		<view class="cart_item" v-for="(item, index) in cartList" :key="item.goods_id">
			<view class="item_check">
				<checkbox-group name="" @change="chcekChange" :data-index="index">
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
					<NumChange :num="item.num" :index="index"></NumChange>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NumChange from '@/components/Num_change/num_change.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			NumChange
		},
		props: {
			cartList: {
				type: Array,
				default: []
			}
		},
		methods: {
			chcekChange (e) {
				// 复选框data-了索引值
				let index = e.currentTarget.dataset.index
				// 将索引值数据共享给父组件
				this.$emit('itemCheckChange', index)
			}
		}
	}
</script>

<style lang="less" scoped>
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
						white-space: normal;
						word-break: break-all;
						word-wrap: break-word;
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
</style>
