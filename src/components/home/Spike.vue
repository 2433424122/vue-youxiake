<template>
	<div>
		<div class="spike">
			<swiper :options="swiperOptions">
				<swiper-slide v-for="item in spikeList" :key='item.index'>
					<div class="spike-content" @click='toDetails(item)'>
						<div class="spike-top">

							<img src="../../assets/img/spike1.png" />
							<span>距离结束</span>
							<count-down v-on:start_callback="countDownS_cb(1)" v-on:end_callback="countDownE_cb(1)" :currentTime="item.startTime" :startTime="item.startTime" :endTime="item.endTime" :dayTxt="'天'" :hourTxt="':'" :minutesTxt="':'" :secondsTxt="''">
							</count-down>
						</div>
						<div class="spike-buttom">
							<img :src='item.imgUrl' />
							<div class="buttom-title">
								<p>{{item.title}}</p>
								<div class="buttom-price">
									<span>￥{{item.price}}</span>
									<p>剩下{{item.num}}个</p>
								</div>
							</div>
						</div>
					</div>

				</swiper-slide>

				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	import CountDown from 'vue2-countdown'
	export default {
		props: ['spikeList'],

		data() {
			return {
				item: '',
				swiperOptions: {
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					}
				}
			}
		},
		components: {
			CountDown
		},
		methods: {

			countDownS_cb: function(x) {
				console.log(x)
			},
			countDownE_cb: function(x) {
				console.log(x)
			},
			toDetails(item) {
				this.$router.push({
					path: '/details',
					query: {
						item
					}
				})
			}

		}

	}
</script>

<style scoped>
	.spike {
		width: 100%;
		/*background: red;*/
		height: 4.3777777rem;
	}
	
	.spike-content {
		padding: .3rem;
	}
	
	.spike-top {
		width: 100%;
		height: 1.2933333333rem;
		display: flex;
		align-items: center;
		/*justify-content: center;*/
		font-size: .35rem;
	}
	
	.spike-top img {
		height: .4133333333rem;
		width: 1.333333333rem;
	}
	
	.spike-top span {
		margin-left: .15rem;
	}
	
	.spike-top>div {
		margin-left: .15rem;
	}
	
	.spike-top>>>div span {
		margin-left: .15rem;
		color: #fff;
		border-radius: .1rem;
		background: #8b8b8b;
		padding: 0 .1rem;
	}
	
	.spike-buttom {
		display: flex;
		/*justify-content: center;*/
	}
	
	.buttom-title {
		width: 5.8666666666rem;
		justify-content: space-between;
		padding-left: .3rem;
	}
	
	.spike-buttom img {
		width: 3.093333333rem;
		height: 2.12rem;
	}
	
	.buttom-title p {
		height: 1rem;
		line-height: .5rem;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: .35rem;
		text-align: center;
	}
	
	.buttom-price {
		display: flex;
		justify-content: space-between;
		margin-top: .7rem;
		font-size: .35rem;
	}
	
	.buttom-price span {
		color: red;
	}
	
	.buttom-price p {
		margin-top: -.2rem;
		padding: .1rem;
		height: .35rem;
		border-radius: .1rem;
		background: #FED101;
		border: solid 1px #444;
		line-height: .35rem;
		font-size: .35rem;
	}
	
	.swiper-pagination {
		overflow: visible;
	}
	
	.swiper-pagination>>>.swiper-pagination-bullet-active {
		background: orange;
	}
	
	.spike-buttom .buttom-title {
		color: #333;
		overflow: hidden;
	}
	
	.swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-container-horizontal>
	.swiper-pagination-bullets {
		bottom: 4px;
	}
</style>