<template>
	<view class="navbar">
		<view class="main">
			<view class="text" :class="index===currentIndex?'index':''" v-for="(item, index) in navList" @click="navClick(index)" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0
			}
		},
		props: {
			navList: {
				type: Array,
				default: []
			}
		},
		methods: {
			navClick (index) {
				this.currentIndex = index
				this.$emit('tabchange', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		display: flex;
		height: 70rpx;
		line-height: 70rpx;
		// border-bottom: 2rpx solid #ccc;
		// justify-content: space-between;
		// align-items: center;
		.text {
			flex: 1;
			font-size: 28rpx;
			text-align: center;
		}
		.index {
			color: $uni-color-main;
			border-bottom: 4rpx solid $uni-color-main;
		}
	}
</style>
