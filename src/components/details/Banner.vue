<template>
	<div class="banner">
		<div class="banner-img">
			<img :src="item.imgUrl" />
		</div>
		<div class="banner-title">
			{{item.title}}
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				item: ''
			}
		},
		activated() {
			
						console.log(this.$route.query)
			this.item = this.$route.query.item
		}
	}
</script>

<style scoped>
	.banner {
		height: 5.64rem;
		width: 100%;
	}
	
	img {
		width: 100%;
		height: 100%;
	}
	
	.banner-title {
		padding: .2rem;
		font-size: .5rem;
	}
</style>