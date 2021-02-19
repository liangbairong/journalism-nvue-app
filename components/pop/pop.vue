<template>
	<view :class="`pop-box ${vif?'pop-box-show':''}`" :style="`height:${screenHeight}px;`">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:0,
			}
		},
		props:{
			vif: {
				type: Boolean,
				default: false
			},
		},
		created() {
			const sys = uni.getSystemInfoSync();
			this.screenHeight = sys.windowHeight;
		},
		methods: {
			
		}
	}
</script>

<style>
.pop-box{
	position: absolute;
	left: 0;width: 750upx;
	top: 0;
	transform: translateX(-750rpx);
}
	
.pop-box-show{
	transform:none;
}
</style>
