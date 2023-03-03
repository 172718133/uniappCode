<template>
	<view class="num_change">
		<view class="less" @click="less">
			-
		</view>
		<view class="num">
			{{num}}
		</view>
		<view class="add" @click="add">
			+
		</view>
	</view>
</template>

<script>
	import bus from '../../util/eventBus.js'
	export default {
		data() {
			return {
				
			}
		},
		props: {
			num: {
				type: Number,
				default: 0
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			less() {
				let num = this.num
				let obj = { index: this.index, num: --num
				}
				bus.$emit('numLess', obj)
			},
			add() {
				let num = this.num
				let obj = { index: this.index, num: ++num
				}
				bus.$emit('numAdd', obj)
			}
		}
	}
</script>

<style lang="less" scoped>
	.num_change {
		width: 160rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		text-align: center;
		margin-right: 20rpx;
		border: 1rpx solid #eee;
		border-radius: 14rpx;
		.less {
			flex: 1.2;
			font-weight: bold;
		}
		.num {
			flex: 2;
			font-size: 26rpx;
			border-left: 1rpx solid #eee;
			border-right: 1rpx solid #eee;
		}
		.add {
			flex: 1.2;
			font-weight: bold;
		}
	}	
</style>
