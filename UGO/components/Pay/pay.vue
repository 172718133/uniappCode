<template>
	<view class="pay">
		<checkbox-group name="" class="checkbox" @change="checkChange">
			<label>
				<checkbox :checked="allCheck" color="#5cdedb" style="transform:scale(0.8)" />
				<text>全选</text>
			</label>
		</checkbox-group>
		<view class="totalPrice">
			合计:￥
			<span>{{totalPrice}}</span>
		</view>
		<view class="totalNum" @click="toPay">
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
			checkChange () {
				// 定义一个参数，为全选按钮勾选状态的相反值
				let val = !this.allCheck
				this.$emit('payCheckChange', val)
			},
			// 结算按钮点击事件
			toPay () {
				let address = uni.getStorageSync('selectAdd')
				if (!address) {
					uni.showToast({
						title: '请选择收货地址',
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: '/pages/pay/pay'
					})
				}
			}
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
			/* #ifdef H5 */
			bottom: 92rpx;
			/* #endif */
			/* #ifdef APP-PLUS || MP-WEIXIN */
			bottom: 0;
			/* #endif */
			left: 0;
			right: 0;
			.checkbox {
				flex: 2;
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
