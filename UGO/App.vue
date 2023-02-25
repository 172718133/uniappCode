<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url('./uni.scss');
	/*每个页面公共css */
	page,view,text,image,swiper,swiper-item,navigator{
	  padding: 0;
	  margin: 0;
	  box-sizing: border-box;
	}
</style>
