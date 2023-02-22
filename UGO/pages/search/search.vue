<template>
	<view class="search">
		<view class="top">
			<view class="top_main">
				<uni-icons class="icon" type="search" size="24"></uni-icons>
				<input type="text" placeholder="ggg">
				<view class="cancel">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.search {
		// box-sizing: border-box;
		.top {
			height: 80rpx;
			padding: 10rpx;
			// background-color: antiquewhite;
			.top_main {
				display: flex;
				height: 100%;
				// justify-content: center;
				align-items: center;
				text-align: center;
				// background-color: aqua;
				.icon {
					flex: 1;
				}
				input {
					flex: 5;
					border: 2rpx solid #ccc;
					border-radius: 30rpx;
				}
				.cancel {
					flex: 1.8;
				}
			}
		}
	}
</style>
