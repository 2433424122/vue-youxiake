<template>
	<div class="header">
		<!--city头部-->
		选择城市
		<!--<router-link to='/'>

			<i class="iconfont">&#xe785;</i>
		</router-link>-->
		<i class="iconfont" @click="toHome">&#xe785;</i>

	</div>
</template>

<script>
	export default {
		methods: {
			toHome() {
				//回到首页
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>

<style scoped>
	.header {
		background: #FED101;
		text-align: center;
		height: 1.173333333rem;
		line-height: 1.1733333333rem;
		font-size: .4rem;
		position: relative;
	}
	
	.header i {
		position: absolute;
		margin-right: .4rem;
		right: 0;
		font-size: .6rem;
	}
</style>