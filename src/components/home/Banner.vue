<template>
	<div class="banner">
		<!--顶部点击弹出-->
		<transition enter-active-class="bounceInLeft" leave-active-class="bounceOutLeft">
			<div class="banner-left animated" v-show="toshow"></div>
		</transition>
		<!--顶部文字部分-->
		<div class="banner-header">
			<div class="banner-top">
				<div class="top-left" @click="toCity">
					{{cityName}}
					<i class="iconfont">&#xe64a;</i>
				</div>
				<div class="top-search">
					<i class="iconfont">&#xe610;</i> 泰国
				</div>

				<div class="top-right">
					<img src="@/assets/img/show.png" @click="toShow" />
				</div>
			</div>
			<div class="banner-swiper">
				<swiper :options="swiperOptions">
					<swiper-slide><img src="@/assets/img/banner1.png" /> </swiper-slide>
					<swiper-slide><img src="@/assets/img/banner2.png" /> </swiper-slide>
					<swiper-slide><img src="@/assets/img/banner3.png" /> </swiper-slide>

					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>

		</div>
	</div>
</template>

<script scoped>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['cityName'])
		},
		data() {
			return {
				toshow: false,
				swiperOptions: {
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		methods: {
			toShow() {
				this.toshow = !this.toshow;
			},
			toCity() {
				this.$router.push({
					path: '/city'
				})
			}
		}

	}
</script>
<style scoped>
	/*点击弹出*/
	
	.banner-left {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		background: #000;
		width: 6.66666rem;
		height: 100%;
	}
	/*头部banner和图片文字*/
	
	.banner-header {
		/*background: red;*/
		width: 100%;
		height: 5.6rem;
		position: relative;
	}
	
	.banner-top {
		position: absolute;
		left: 0;
		top: .5rem;
		width: 100%;
		z-index: 2;
		height: .8rem;
		/*background: red;*/
		display: flex;
		justify-content: center;
		align-items: center;
		/*text-align: center;*/
	}
	
	.top-left {
		padding: .4rem;
		color: #fff;
		font-size: 0.426666666rem;
	}
	
	.top-search {
		color: #333;
		padding: .2rem;
		background: #fff;
		font-size: .3733333rem;
		border-radius: .1rem;
		flex: 1;
	}
	
	.top-right {
		padding: .2rem .4rem;
		/*height: .8rem;
		width: .8rem;*/
	}
	
	.top-right img {
		height: .53333333rem;
		width: .53333333rem;
	}
	
	.banner-swiper {
		width: 100%;
		height: 5.6rem;
	}
	
	.banner-swiper img {
		width: 100%;
		height: 100%;
	}
	
	.swiper-pagination>>>.swiper-pagination-bullet-active {
		background: orange;
	}
</style>