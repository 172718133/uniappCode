<template>
	<view class="user">
		<view v-if="userinfo">
			<view class="info">
				<view class="info_image">
					<image :src="userinfo.avatarUrl?userinfo.avatarUrl:'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLibBd8sHiawh8kGUABuU28wf264JVSx9RLuobcUzdXKgyaPNo0mEylwYXRpsW3OoDPQfWzvAS0L2NQ/132'" mode="widthFix"></image>
				</view>
				<view class="info_main">
					<view class="main_name">
						{{userinfo.nickName}}
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
				<view class="my_collect" @click="toCollect">				
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
			<MyItem :list="list"></MyItem>
			<MyItem :list="list1"></MyItem>
		</view>
		<view class="login" v-else>
			<button class="button" type="primary" @click="login">立即登录</button>
		</view>
	</view>
</template>

<script>
	import MyItem from '@/components/My_item/my_item.vue'
	export default {
		data() {
			return {
				userinfo: {
					nickName: 'Loong'
				},
				list: {
					title_left: '我的订单',
					title_right: '全部﹥',
					context: [
						{
							icon: 'wallet',
							text: '待付款'
						},
						{
							icon: 'gift',
							text: '待发货'
						},
						{
							icon: 'folder-add',
							text: '待收货'
						},
						{
							icon: 'chatbubble',
							text: '待评价'
						},
						{
							icon: 'help',
							text: '退款/售后'
						}
					]
				},
				list1: {
					title_left: '我的权益',
					title_right: '全部﹥',
					context: [
						{
							num: '￥49.9',
							text: '红包'
						},
						{
							num: '3张',
							text: '优惠券'
						},
						{
							num: '4862',
							text: '淘金币'
						},
						{
							num: '3542',
							text: '积分'
						}
					]
				}
			}
		},
		components: {
			MyItem
		},
		onLoad() {
			// this.userinfo = uni.getStorageSync('userinfo') || []
		},
		methods: {
			toCollect() {
				uni.navigateTo({
					url: '../collect/collect'
				})
			},
			login () {
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if(~res.provider.indexOf('weixin')) {
							uni.getUserInfo({
								provider: 'weixin',
								success: (res1) => {
									this.userinfo = res1.userInfo
									uni.setStorageSync('userinfo', res1.userInfo)
								}
							})
						}
					}
				})
				// uni.getUserProfile({
				// 	desc: '获取信息',
				// 	success: (res) => {
				// 		console.log(res);
				// 	}
				// })
			}
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
			background: linear-gradient(to bottom, #fff, #f2f2f2);
			border-radius: 20rpx 20rpx 0 0;
			margin-top: -100rpx;

			&>view {
				flex: 1;
				text-align: center;
				padding: 20rpx 0;
			}
			.text {
				font-size: 26rpx;
				margin-top: 10rpx;
			}
		}
		
		.login {
			padding: 200rpx 50rpx 0;
		}
	}
</style>
