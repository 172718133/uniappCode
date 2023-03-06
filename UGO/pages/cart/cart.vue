<template>
	<view class="cart">
		<view class="chooseAdd">
			<view class="selectAdd" @click="chooseAdd" v-if="selectAdd.length !== 0">
				<view class="address_item">
					<view class="address_info">
						<view class="info_title">
							{{selectAdd.address}}
						</view>
						<view class="info">
							<view class="name">
								{{selectAdd.name}}
							</view>
							<view class="phone">
								{{selectAdd.phone}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<button type="default" @click="chooseAdd" v-else>选择收货地址</button>
		</view>
		<CartItem :cartList="cartList" @itemCheckChange="itemCheckChange"></CartItem>
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog cancelText="取消" confirmText="确定" content="确定删除该商品？" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
		<Pay :allCheck="allCheck" :totalNum="totalNum" :totalPrice="totalPrice" @payCheckChange="payCheckChange"></Pay>
	</view>
</template>

<script>
	import bus from '../../util/eventBus.js'
	import GoodsItem from '@/components/Goods_item/goods_item.vue'
	import NumChange from '@/components/Num_change/num_change.vue'
	import CartItem from '@/components/Cart_item/cart_item.vue'
	import Pay from '@/components/Pay/pay.vue'
	export default {
		data() {
			return {
				cartList: [],
				allCheck: false,
				totalPrice: 0,
				totalNum: 100,
				obj: {},
				selectAdd: {}
			}
		},
		components: {
			GoodsItem,
			NumChange,
			CartItem,
			Pay
		},
		methods: {
			chooseAdd(){
				uni.navigateTo({
					url: '/pages/address/choose_address'
				})
			},
			// 删除商品弹窗点击确定按钮
			dialogConfirm () {
				this.cartList.splice(this.obj.index, 1)
				uni.setStorageSync('carts', this.cartList)
				this.total(this.cartList)
			},
			// 删除商品弹窗点击取消按钮
			dialogClose () {
				this.$refs.alertDialog.close()
			},
			// 子组件传递过来的商品的复选框change事件
			itemCheckChange (index) {
				// 获取传递的索引值，根据索引值将这一项的勾选状态取反
				this.cartList[index].checked = !this.cartList[index].checked
				this.allChecked()
				// 执行求总函数，计算总价格和总数量
				this.total(this.cartList)
				uni.setStorageSync('carts', this.cartList)
			},
			// 子组件传递过来的全选按钮的change事件
			payCheckChange (val) {
				// 将子组件传递过来的值复制给全选按钮，父子组件相互传值
				// 父->子使用props
				// 子->父使用$emit()
				this.allCheck = val
				// 全选按钮状态改变，循环商品列表所有的商品勾选状态都改为和全选按钮一致
				this.cartList.forEach(item => {
					item.checked = this.allCheck
					// 重新计算价格数量
				})
				this.total(this.cartList)
				uni.setStorageSync('carts', this.cartList)
			},
			// 计算总价和总商品数量
			total (carts) {
				this.totalPrice = carts.filter(item => item.checked).reduce((total, item) => total += item.num * item.goods_price, 0)
				this.totalNum = carts.filter(item => item.checked).reduce((total, item) => total += item.num, 0)
			},
			// 判断是否全选
			allChecked () {
				let state = this.cartList.every(item => item.checked)
				if (state) {
					this.allCheck = true
				} else {
					this.allCheck = false
				}
			}
		},
		onShow() {
			this.cartList = uni.getStorageSync('carts') || []
			this.selectAdd = uni.getStorageSync('selectAdd') || []
			console.log(this.selectAdd);
			this.total(this.cartList)
			this.allChecked()
		},
		created() {
			bus.$on('numLess', obj => {
				this.obj = obj
				if (obj.num > 0) {
					this.cartList[obj.index].num = obj.num
				} else {
					this.$refs.alertDialog.open()
				}
				this.total(this.cartList)
				uni.setStorageSync('carts', this.cartList)
			})
			bus.$on('numAdd', obj => {
				this.obj = obj
				this.cartList[obj.index].num = obj.num
				this.total(this.cartList)
				uni.setStorageSync('carts', this.cartList)
			})
		}
	}
</script>

<style lang="less" scoped>
	.cart {
		width: 100vw;
		overflow: hidden;
		/* #ifdef H5 */
		min-height: calc(100vh - 110rpx);
		/* #endif */
		/* #ifdef APP-PLUS || MP-WEIXIN */
		min-height: 100vh;
		/* #endif */
		background-color: #f2f2f2;
		padding-bottom: 110rpx;
		.chooseAdd {
			padding: 20rpx 40rpx;
			.address_item {
				display: flex;
				padding: 20rpx;
				align-items: center;
				border-bottom: 1rpx solid #e1e1e1;
				.address_info {
					flex: 7;
					// padding-left: 30rpx;
					// padding-right: 10rpx;
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
					flex: 1;
				}
			}
		}
	}
</style>
