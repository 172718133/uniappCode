<template>
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
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			allCheck: {
				type: Boolean,
				default: false
			},
			totalPrice: {
				type: Number,
				default: 0
			},
			totalNum: {
				type: Number,
				default: 0
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
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
</style>
