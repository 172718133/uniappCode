<template>
	<view class="my_item">
		<view class="order">
			<view class="title">
				<view class="left">
					{{list.title_left}}
				</view>
				<view class="right">
					{{list.title_right}}
				</view>
			</view>
			<view :class="isFlex?'content':'float'">
				<navigator :url="item.url" v-for="item in list.context" :key="item.icon">
					<uni-icons :type="item.icon" size="28" v-if="item.icon"></uni-icons>
					<view class="num" v-else>
						{{item.num}}
					</view>
					<view class="text">
						{{item.text}}
					</view>
				</navigator>
			</view>
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
			list: {
				type: Object,
				default: {}
			},
			isFlex: false
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.order {
		padding: 30rpx 20rpx;
		margin: 0 10rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		.title {
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
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

			&>navigator {
				flex: 1;
			}
			.num {
				font-size: 34rpx;
				font-weight: bold;
			}
			.text {
				font-size: 26rpx;
				margin-top: 10rpx;
			}
		}
		.float {
			overflow: hidden;
			&>navigator {
				float: left;
				width: 25%;
				text-align: center;
				margin-top: 30rpx;
			}
			.num {
				font-size: 34rpx;
				font-weight: bold;
			}
			.text {
				font-size: 26rpx;
				margin-top: 10rpx;
			}
		}
	}
</style>
