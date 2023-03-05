<template>
	<view class="add">
		<view class="title">
			<view class="left">
				<uni-icons type="home-filled" size="26" color="#5cdedb"></uni-icons>
				我的地址
			</view>
			<view class="right" @click="delAdd" v-show="editIndex">
				删除
			</view>
		</view>
		<uni-forms ref="baseForm" :rules="rules" :label-width="90" border label-align="right" :model="addressForm"
			validateTrigger="bind">
			<uni-forms-item label="收货地址:" required name="address">
				<uni-easyinput class="textaera" type="textarea" autoHeight v-model="addressForm.address" :clearable="false" :inputBorder="false" placeholder="填写地址" placeholderStyle="font-size: 24rpx"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="收货人:" required name="name">
				<uni-easyinput class="input" v-model="addressForm.name" :clearable="false" :inputBorder="false" placeholder="填写收货人姓名"
					placeholderStyle="font-size: 24rpx"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="手机号:" required name="phone">
				<uni-easyinput class="input" v-model="addressForm.phone" :clearable="false" :inputBorder="false" placeholder="填写收货人手机号"
					placeholderStyle="font-size: 24rpx"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">保存收货地址</button>
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog cancelText="取消" confirmText="确定" content="确定删除该收货地址？" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				editIndex: '',
				// 添加收货地址的信息
				addressForm: {
					address: '',
					name: '',
					phone: ''
				},
				rules: {
					address: {
						rules: [{
							required: true,
							errorMessage: '收货地址不能为空'
						}]
					},
					name: {
						rules: [{
							required: true,
							errorMessage: '收货人不能为空'
						}, {
							minLength: 2,
							maxLength: 8,
							errorMessage: '收货人姓名应为{minLength}-{maxLength}个字符'
						}]
					},
					phone: {
						rules: [{
							required: true,
							errorMessage: '手机号不能为空'
						}, {
							format: 'number',
							errorMessage: '手机号只能输入数字'
						}, {
							pattern: '^1[3-9]\\d{9}$',
							errorMessage: '手机号码格式有误'
						}]
					}
				},
			}
		},
		methods: {
			// 保存收货地址按钮点击事件
			submit() {
				let addressList = uni.getStorageSync('addressList') || []
				if (this.editIndex) {
					this.$refs.baseForm.validate().then(res => {
						addressList[this.editIndex] = this.addressForm
						// console.log(this.editIndex, addressList);
						uni.setStorageSync('addressList', addressList)
						uni.showToast({
							title: '修改成功',
							icon: 'none',
							success: () => {
								setTimeout(() => {
									uni.navigateBack(-1)
								}, 1000)
							}
						})
					}).catch(err => {
						uni.showToast({
							title: '请完善收货地址',
							icon: 'error'
						})
					})
				} else {
					this.$refs.baseForm.validate().then(res => {
						addressList.push(this.addressForm)
						uni.setStorageSync('addressList', addressList)
						uni.showToast({
							title: '保存成功',
							icon: 'none',
							success: () => {
								setTimeout(() => {
									uni.navigateBack(-1)
								}, 1000)
							}
						})
					}).catch(err => {
						uni.showToast({
							title: '请完善收货地址',
							icon: 'error'
						})
					})
				}
			},
			// 回显收货地址信息
			showAddress (index) {
				let change = uni.getStorageSync('addressList') || []
				this.addressForm = change[index]
			},
			// 删除收货地址
			delAdd () {
				this.$refs.alertDialog.open()
			},
			// 弹窗点击确定按钮
			dialogConfirm () {
				let addlist = uni.getStorageSync('addressList') || []
				addlist.splice(this.editIndex, 1)
				uni.setStorageSync('addressList', addlist)
				uni.showToast({
					title: '删除成功',
					icon: 'none',
					success: () => {
						setTimeout(() => {
							uni.navigateBack(-1)
						}, 1000)
					}
				})
			},
			// 弹窗点击取消按钮
			dialogClose () {
				this.$refs.alertDialog.close()
			}
		},
		onLoad(option) {
			this.editIndex = option.index
			if (this.editIndex) {
				this.showAddress(this.editIndex)
			}
		}
	}
</script>

<style lang="less" scoped>
	.add {
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
		.textaera {
			// height: 140rpx;
			// overflow-y: scroll;
			padding: 8rpx 0 0 20rpx;
		}
		.input {
			margin-top: 2rpx;
		}
		button {
			margin-top: 50rpx;
		}
	}
</style>
