<template>
	<view class="add_item">
		<view class="address_item" v-for="(item, index) in addressList" :key="index">
			<view class="address_info" @click="addClick(index)">
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
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			addressList: {
				type: Array,
				default: []
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
			},
			// 收货地址点击事件
			addClick (index) {
				this.$emit('addClick', index)
			}
		}
	}
</script>

<style lang="less" scoped>
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
			height: 40px;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
