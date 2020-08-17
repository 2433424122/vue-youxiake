<template>
	<div>
		<!--城市列表-->
		<div class="city-item">
			<p>定位/附近城市</p>
			<div v-for="item in mapCities" :key="item.index" @click="toHome(item.name)">
				{{item.name}}
			</div>

		</div>
		<div class="city-item">
			<p>已开通周边的站点</p>
			<div v-for="item in cities" :key="item.index" @click="toHome(item.name)">
				{{item.name}}
			</div>

		</div>
		<div class="city-item">
			<p>热门玩乐城市</p>
			<div v-for="item in hotCities" :key="item.index" @click="toHome(item.name)">
				{{item.name}}

			</div>

		</div>

	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		methods: {
			toHome(city) {
				this.changeCity(city);
				this.$router.push({
					path: '/'
				})
			},
			...mapMutations(['changeCity'])
		},
		data() {
			return {
				mapCities: [],
				cities: [],
				hotCities: []
			}
		},
		mounted() {
			let That = this;
			this.axios.get('http://localhost:8080/api/city.json').then((res) => {
				let data = res.data.data;
				//				console.log(data);
				That.mapCities = data.mapCities
				That.cities = data.cities;
				That.hotCities = data.hotCities;

			})
		}

	}
</script>

<style scoped>
	.city-item {
		/*15px*/
		padding-left: .4rem;
		color: #999;
		font-size: .4rem;
	}
	
	.city-item p {
		padding: .3rem 0;
	}
	
	.city-item div {
		display: inline-block;
		width: 2rem;
		height: .82rem;
		line-height: .82rem;
		border-radius: .2rem;
		border: 1px solid;
		text-align: center;
		margin-right: .4rem;
		box-sizing: border-box;
		white-space: nowrap;
		overflow: hidden;
		margin-bottom: .2rem;
	}
</style>