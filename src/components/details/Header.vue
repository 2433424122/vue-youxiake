<template>
	<div class="header">
		<div class="header-left" @click="toHeader">
			<i class="iconfont">&#xe785;</i></div>
		<div class="header-title">
			活动详情
		</div>
		<div class="header-right">
			<i class="iconfont">&#xe64a;</i>
		</div>

	</div>

</template>

<script>
	export default {
		methods: {
			toHeader() {
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>

<style scoped>
	.header {
		width: 100%;
		height: 1.2rem;
		display: flex;
		background: #f7f7f7;
		justify-content: center;
		align-items: center;
	}
	
	.header>div {
		/*background: red;*/
		flex: 1;
	}
	
	.header .header-left {
		padding-left: .4rem;
	}
	
	.header .header-title {
		font-size: .5rem;
		text-align: center;
	}
	
	.header .header-right {
		text-align: right;
		padding-right: .4rem;
	}
</style>