<template>
	<view class="goods_item">
		<view class="list">
			<navigator :url="'../goods_detail/main?goods_id=' + item.goods_id" class="list_item" v-for="item in goodsList" :key="item.goods_id">
				<view class="image">
					<image :src="item.goods_small_logo ? item.goods_small_logo : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yxke.com%2Fstyle%2Fimages%2Fnopic.jpg&refer=http%3A%2F%2Fwww.yxke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642316385&t=412e4049f4c810e6de0cb4af644b341b'" mode="widthFix"></image>
				</view>
				<view class="goods_info">
					<view class="title">
						{{item.goods_name}}
					</view>
					<view class="price">
						￥{{item.goods_price}}
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			goodsList: {
				type: Array,
				default: []
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
		.list {
			.list_item {
				display: flex;
				padding: 20rpx;
				border-bottom: 2rpx solid #e1e1e1;
				.image {
					// background-color: aquamarine;
					max-height: 200rpx;
					// width: 100rpx;
					flex: 2;
					display: flex;
					justify-content: center;
					align-items: center;
					image {
						width: 80%;
						max-width: 180rpx;
						min-width: 100rpx;
					}
				}
				.goods_info {
					flex: 4;
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.title {
						font-size: 26rpx;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
					}
					.price {
						color: red;
						font-weight: bold;
					}
				}
			}
		}
</style>
