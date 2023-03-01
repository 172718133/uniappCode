<template>
	<view class="user">
		<view class="info">
			<view class="info_image">
				<image src="@/static/imgs/header.jpg" mode="widthFix"></image>
			</view>
			<view class="info_main">
				<view class="main_name">
					YiLong
				</view>
				<view class="main_other">
					<view class="focus">
						关注 0
					</view>
					<view class="fans">
						粉丝 0
					</view>
				</view>
			</view>
		</view>
		<view class="collect">
			<view class="my_collect">
				<uni-icons type="star" size="30"></uni-icons>
				<view class="text">
					收藏
				</view>
			</view>
			<view class="shop_collect">
				<uni-icons type="calendar" size="30"></uni-icons>
				<view class="text">
					订阅店铺
				</view>
			</view>
			<view class="history">
				<uni-icons type="eye" size="30"></uni-icons>
				<view class="text">
					足迹
				</view>
			</view>
			<view class="change">
				<uni-icons type="wallet" size="30"></uni-icons>
				<view class="text">
					零钱
				</view>
			</view>
		</view>
		<view class="order">
			<view class="title">
				<view class="left">
					我的订单
				</view>
				<view class="right">
					全部﹥
				</view>
			</view>
			<view class="content">
				<view>
					<uni-icons type="wallet" size="30"></uni-icons>
					<view class="text">
						待付款
					</view>
				</view>
				<view>
					<uni-icons type="gift" size="30"></uni-icons>
					<view class="text">
						待发货
					</view>
				</view>
				<view>
					<uni-icons type="folder-add" size="30"></uni-icons>
					<view class="text">
						待收货
					</view>
				</view>
				<view>
					<uni-icons type="chatbubble" size="30"></uni-icons>
					<view class="text">
						待评价
					</view>
				</view>
				<view>
					<uni-icons type="help" size="30"></uni-icons>
					<view class="text">
						退款/售后
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.user {
		background-color: #f2f2f2;
		min-height: 100vh;

		.info {
			height: 400rpx;
			background: url('../../static/imgs/bg.png') no-repeat scroll 0 0;
			background-size: 100%;
			display: flex;
			padding: 40rpx 30rpx;

			.info_image {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 30rpx;

				image {
					width: 100%;
				}
			}

			.info_main {
				margin-top: 50rpx;

				.main_name {
					font-size: 38rpx;
					font-weight: bold;
				}

				.main_other {
					display: flex;
					margin-top: 20rpx;
					font-size: 26rpx;
					color: #999;

					.focus {
						margin-right: 20rpx;
					}

					.fans {}
				}
			}
		}

		.collect {
			display: flex;
			padding: 20rpx 0;
			background: linear-gradient(to bottom, #fff, #f2f2f2);
			border-radius: 20rpx 20rpx 0 0;
			margin-top: -100rpx;

			&>view {
				flex: 1;
				text-align: center;
			}

			.my_collect {}

			.shop_collect {}

			.history {}

			.change {}

			.text {
				font-size: 26rpx;
				margin-top: 10rpx;
			}
		}
		
		.order {
			padding: 30rpx 20rpx;
			margin: 0 10rpx;
			background-color: #fff;
			border-radius: 20rpx;
			.title {
				display: flex;
				justify-content: space-between;
				.left {
					font-size: 32rpx;
					font-weight: 600;
				}
				.right {
					font-size: 26rpx;
					color: #999;
				}
			}
			.content {
				display: flex;
				text-align: center;
				padding-top: 40rpx;
				&>view {
					flex: 1;
				}
				.text {
					font-size: 26rpx;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
