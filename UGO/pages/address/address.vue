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
			<AddressItem :addressList="addressList"></AddressItem>
		</view>
	</view>
</template>

<script>
	import AddressItem from '../../components/Address_item/address_item.vue'
	export default {
		data() {
			return {
				addressList: []
			}
		},
		components: {
			AddressItem
		},
		methods: {
			
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
		}
	}
</style>
