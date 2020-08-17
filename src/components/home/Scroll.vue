<template>
	<div class="scroll">
		<div class="scroll-content">
			<div class="scroll-right">
				<ul :class="{animatedTop}">
					<li v-for="item in scrollList" :key="item.index">
						<img src="../../assets/img/scroll.png" />{{item.title}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				animatedTop: 'false',
				scrollList: [{
						id: 0,
						title: "清迈旅游00000000000000000000000000000000"
					},
					{
						id: 1,
						title: "港珠澳大11111111111111111111111111111111"
					},
					{
						id: 2,
						title: "港珠澳22222222222222222"
					},
					{
						id: 3,
						title: "清迈旅333333333333333333333333333333333迈"
					},
					{
						id: 4,
						title: "港珠澳大4444444444444444444444444444"
					},
					{
						id: 5,
						title: "清迈旅游落555555555555555555555555555555555555"
					}
				]
			}
		},
		mounted() {
			setInterval(this.showScroll, 2000)
		},
		methods: {
			showScroll() {
				this.animatedTop = true;
				setTimeout(() => {
					this.scrollList.push(this.scrollList[0]);
					this.scrollList.shift();
					this.animatedTop = false;

				}, 500)

			}
		}
	}
</script>
<style scoped>
	.animatedTop {
		transition: all .5s;
		margin-top: -0.66666666666rem;
	}
	
	.scroll {
		padding: .3rem 0;
	}
	
	.scroll-content {
		background: url('/img/scroll.png') no-repeat;
		background-size: 100%;
		width: 100%;
		height: 1.33333333rem;
		position: relative;
	}
	
	.scroll-right {
		position: absolute;
		right: 0;
		height: 1.33333333rem;
		width: 8.13333333rem;
		overflow: hidden;
	}
	
	.scroll-right li {
		font-size: .35rem;
		color: #333;
		line-height: .66666666rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.scroll-right li img {
		width: .16rem;
		height: .16rem;
		white-space: nowrap;
		display: inline-block;
	}
</style>