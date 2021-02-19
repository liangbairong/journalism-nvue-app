<script>
	import http from '@/api/http.js'
	export default {
		globalData: {
			$http: new http(),
			$system:{},
			
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	
		updateSystem(){
			console.log(this)
		}
	}
</script>

<style>
	/*每个页面公共css */

</style>
