<template>
	<view class="category">
		<Search :text="'点击搜索'"></Search>
		<view class="cate_container">
			<scroll-view scroll-y="true" class="left_menu">
				<view class="menu_item" :class="index===currentIndex?'left_style':''" v-for="(item, index) in leftList"
					:key="item" @click="leftClick(index)">{{item}}</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="right_content">
				<view class="content" v-for="item in rightList" :key="item.cat_id">
					<view class="title">
						{{item.cat_name}}
					</view>
					<view class="content_item">
						<navigator :url="'../goods_list/goods_list?cid=' + item1.cat_id" class="item" v-for="item1 in item.children" :key="item1.cat_id">
							<image :src="item.cat_icon" mode="widthFix"></image>
							<view class="item_name">
								{{item1.cat_name}}
							</view>
						</navigator>
					</view>
				</view>
				<view class="bottom">
					—— 到底啦 ——
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Search from '@/components/Search/search.vue'
	import {
		getCategoryListAPI
	} from '@/api/index.js'
	export default {
		data() {
			return {
				leftList: [],
				rightList: [],
				currentIndex: 0,
				cateList: [],
				scrolltop: 0
			}
		},
		components: {
			Search
		},
		onLoad() {
			this.cateList = uni.getStorageSync('CateList')
			if (!this.cateList) {
				this.getCategoryList()
			} else if (Date.now() - this.cateList.time > 1000*10) {
				this.getCategoryList()
			} else {
				this.leftList = this.cateList.data.map((item) => {
						return item.cat_name
					})
				this.rightList = this.cateList.data[0].children
			}
			
		},
		methods: {
			async getCategoryList() {
				const { data: res } = await getCategoryListAPI()
				this.leftList = res.message.map((item) => {
						return item.cat_name
					})
				this.rightList = res.message[0].children
				uni.setStorageSync('CateList', {time: Date.now(), data: res.message})
			},
			// 左侧菜单栏点击事件
			leftClick(index) {
				this.scrolltop = -1
				this.currentIndex = index
				// this.leftList = this.cateList.map((item) => {
				// 		return item.cat_name
				// 	})
				this.rightList = this.cateList.data[index].children
			}
		}
	}
</script>

<style lang="scss" scoped>
	.category {
		padding-top: 80rpx;
		.cate_container {
			/* #ifdef APP-PLUS || MP-WEIXIN */
			height: calc( 100vh - 80rpx );
			/* #endif */
			/* #ifdef H5 */
			height: calc( 100vh - 180rpx );
			/* #endif */
			display: flex;
			.left_menu {
				flex: 2;

				.menu_item {
					font-size: 26rpx;
					line-height: 76rpx;
					text-align: center;
					background-color: #f8f8f8;
				}

				.left_style {
					color: $uni-color-main;
					background-color: #fff;
					font-size: 32rpx;
					font-weight: bold;
				}
			}

			.right_content {
				flex: 5;
				.content {
					padding: 20rpx 30rpx;
					.title {
						font-size: 34rpx;
						margin-bottom: 30rpx;
					}
					.content_item {
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						.item {
							text-align: center;
							width: 33.33%;
							margin: 20rpx 0;
							image {
								width: 100rpx;
								height: 100rpx;
								background-color: #5cdedb;
							}
							.item_name {
								font-size: 26rpx;
								margin-top: 10rpx;
							}
						}
					}
				}
				.bottom {
					text-align: center;
					margin-bottom: 30rpx;
					margin-top: 20rpx;
					color: #999;
				}
			}
		}
	}
</style>
