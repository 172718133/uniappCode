<template>
	<view class="goods_detail">
		<swiper class="swiper" :indicator-dots="true" circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in goodsInfo.pics" :key="item.pics_id">
				<view class="swiper-item" @click="previewImg">
					<image :src="item.pics_big_url ? item.pics_big_url : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.yxke.com%2Fstyle%2Fimages%2Fnopic.jpg&refer=http%3A%2F%2Fwww.yxke.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642316385&t=412e4049f4c810e6de0cb4af644b341b'"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="goods_info">
			<!-- 商品信息 -->
			<view class="info">
				<view class="price">
					<span>￥</span>
					<span class="span">{{goodsInfo.goods_price}}</span>
				</view>
				<view class="title">
					<view class="name">
						{{goodsInfo.goods_name}}
					</view>
					<view class="collect" @click="collect">
						<uni-icons type="star" size="24"></uni-icons>
						<span>收藏</span>
					</view>
				</view>
			</view>
			<!-- 商品参数 -->
			<view class="attrs">
				<view class="attrs_title">产品参数</view>
				<view class="main" v-for="item in goodsInfo.attrs" :key="item.attr_id">
					<view class="attrs_name">
						{{item.attr_name}}
					</view>
					<view class="attrs_con">
						{{item.attr_value || '暂无'}}
					</view>
				</view>
			</view>
			<!-- 商品评价 -->
			<view class="evaluation">
					<view class="eva_title">
						<view class="left">
							宝贝评价（0）
						</view>
						<view class="right">
							更多 >
						</view>
					</view>
					<view class="eva_main">
						暂无评论
					</view>
			</view>
			<!-- 商品详情 -->
			<view class="intro">
				<view class="intro_title">
					— 详情 —
				</view>
				<view class="intro_main" v-html="goodsInfo.goods_introduce"></view>
			</view>
		</view>
		<GoodsBottom></GoodsBottom>
	</view>
</template>

<script>
	import { getGoodsDetailAPI } from '@/api/index.js'
	import GoodsBottom from '@/components/Goods_bottom/goods_bottom.vue'
	export default {
		data() {
			return {
				goods_id: '',
				goodsInfo: [],
				previewList: []
			}
		},
		components: {
			GoodsBottom
		},
		onLoad(option) {
			this.goods_id = option.goods_id
			this.getGoodsDetail()
		},
		methods: {
			async getGoodsDetail() {
				const { data: res } = await getGoodsDetailAPI(this.goods_id)
				this.goodsInfo = res.message
				this.previewList = res.message.pics.map((item) => {
					return item.pics_big_url
				})
				console.log(this.goodsInfo);
			},
			// 图片预览
			previewImg () {
				uni.previewImage({
					urls: this.previewList,
					indicator: 'number',
					loop: true
				})
			},
			// 收藏按钮点击事件
			collect () {
				console.log('点击了收藏');
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods_detail {
		min-height: 100vh;
		background-color: #f7f7f7;
		// padding: 0 20rpx;
		padding-bottom: 120rpx;
		.swiper {
			width: 100%;
			height: 500rpx;
			swiper-item {
				.swiper-item {
					text-align: center;
					image {
						height: 500rpx;
					}
				}
			}
		}
		.goods_info {
			.info {
				margin: 20rpx;
				background-color: #fff;
				// padding: 20rpx;
				border-radius: 20rpx;
				overflow: hidden;
				.price {
					line-height: 120rpx;
					padding-left: 30rpx;
					color: #fff;
					background: linear-gradient(90deg,#dd25fc,#9a26fc)!important;
					.span {
						font-size: 48rpx;
						font-weight: bold;
					}
				}
				.title {
					margin: 10rpx 0;
					padding: 20rpx;
					display: flex;	
					.name {
						flex: 5;
						font-weight: bold;
						line-height: 1.4;
					}
					.collect {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-size: 24rpx;
						span {
							margin-top: 2rpx;
						}
					}
				}
			}
			.attrs {
				background-color: #fff;
				font-size: 28rpx;
				margin: 20rpx 20rpx 0;
				border-radius: 20rpx;
				.attrs_title {
					line-height: 100rpx;
					text-align: center;
					font-size: 30rpx;
					color: #999;
				}
				.main {
					padding: 20rpx;
					display: flex;
					word-break: break-all;
					.attrs_name {
						flex: 3;
						color: #999;
					}
					.attrs_con {
						flex: 5;
					}
				}
			}
			.evaluation {
				padding: 20rpx;
				background-color: #fff;
				margin: 20rpx;
				border-radius: 20rpx;
				.eva_title {
					display: flex;
					justify-content: space-between;
					.left {
						font-size: 32rpx;
						font-weight: bold;
					}
					.right {
						font-size: 30rpx;
						color: #999;
					}
				}
				.eva_main {
					text-align: center;
					margin: 60rpx 0 30rpx 0;
				}
			}
			.intro {
				.intro_title {
					text-align: center;
					margin: 40rpx 0 40rpx 0;
					color: #999;
				}
			}
		}
	}
</style>
