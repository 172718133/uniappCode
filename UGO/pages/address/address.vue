<template>
	<view class="address">
		<view class="title">
			<view class="left">
				<uni-icons type="home-filled" size="26" color="#5cdedb"></uni-icons>
				我的地址
			</view>
			<navigator url="add_address" class="right">
				添加地址
			</navigator>
		</view>
		<view class="address_list">
			<view class="address_item" v-for="(item, index) in addressList" :key="index">
				<view class="address_info">
					<view class="info_title">
						{{item.address}}
					</view>
					<view class="info">
						<view class="name">
							{{item.name}}
						</view>
						<view class="phone">
							{{item.phone}}
						</view>
					</view>
				</view>
				<uni-icons class="compose" type="compose" size="24" color="#ccc" @click="toEdit(index)"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressList: []
			}
		},
		methods: {
			// 编辑按钮点击事件
			toEdit (index) {
				uni.navigateTo({
					url: '../address/add_address?index=' + index
				})
				uni.setNavigationBarTitle({
					title: '编辑收货地址'
				})
			}
		},
		onShow() {
			this.addressList = uni.getStorageSync('addressList') || []
		}
	}
</script>

<style lang="less" scoped>
	.address {
		padding: 20rpx;
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			.left {
				display: flex;
				align-items: center;
			}
			.right {
				font-weight: bold;
			}
		}
		.address_list {
			.address_item {
				display: flex;
				padding: 20rpx;
				align-items: center;
				border-bottom: 1rpx solid #e1e1e1;
				.address_info {
					flex: 7;
					padding-left: 30rpx;
					padding-right: 10rpx;
					.info_title {
						font-size: 30rpx;
						font-weight: bold;
					}
					.info {
						display: flex;
						margin-top: 20rpx;
						font-size: 24rpx;
						color: #999;
						.name {
							margin-right: 20rpx;
						}
						.phone {}
					}
				}
				.compose {
					flex: 1;
				}
			}
		}
	}
</style>
