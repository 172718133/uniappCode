<template>
	<view class="choose_add">
		<view class="title">
			<view class="left">
				<uni-icons type="home-filled" size="26" color="#5cdedb"></uni-icons>
				我的地址
			</view>
		</view>
		<view class="none" v-if="addressList.length == 0">
			请先添加收货地址哦~
		</view>
		<view class="address_list" v-else>
			<AddressItem :addressList="addressList" @addClick="chooseAdd"></AddressItem>
		</view>
	</view>
	
</template>

<script>
	import AddressItem from '@/components/Address_item/address_item.vue'
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
			chooseAdd (index) {
				let selectAdd = this.addressList[index]
				console.log(index, selectAdd);
				uni.setStorageSync('selectAdd', selectAdd)
				uni.navigateBack(-1)
			}
		},
		onShow() {
			this.addressList = uni.getStorageSync('addressList')
		}
	}
</script>

<style lang="less" scoped>
	.choose_add {
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
		}		
	}
	.none {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 200px;
	}
</style>
