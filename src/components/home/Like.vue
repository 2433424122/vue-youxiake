<template>
	<div class="like">
		<div class="like-list" v-for="item in likeList " :key="item.index">
			<!--上部分-->
			<div class="like-top">
				<div class="top-left">
					<span>{{item.title}}</span>

				</div>
				<p class="top-right">更多></p>
			</div>
			<!--下部分-->
			<div class="like-bottom">

				<div class="bottom-header" @click="toDetails(item)" :style="{'background':'url('+item.imgUrl+')  no-repeat center center'}">
					<div class="header-info">
						<span>{{item.Introduction}}</span>
						<span>￥{{item.price}}起</span>
					</div>
				</div>
				<ul>
					<li @click="toDetails(item)" v-for="item2 in item.cityList" :key="item2.index">
						<img :src="item2.imgUrl" />
						<span class="title">{{item2.title}}</span>
						<span class="price">￥{{item2.price}}起</span>
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
				item: ''
			}
		},
		props: ['likeList'],
		methods: {
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
	.like {
		padding-bottom: 1.8rem;
		margin-top: .5rem;
	}
	
	.like-list {
		font-size: .35rem;
	}
	
	.like-top {
		display: flex;
		justify-content: space-between;
	}
	
	.like-top .top-left {
		position: relative;
	}
	
	.like-top .top-left:before {
		position: absolute;
		content: '';
		background: #fed101;
		width: .1rem;
		height: .48rem;
		top: 0;
	}
	
	.like-top .top-left span {
		padding-left: .5rem;
		font-size: .5rem;
	}
	
	.like-top .top-right {
		padding-right: .5rem;
		color: #999;
		font-size: .4rem;
		font-weight: 500;
	}
	
	.like-bottom {
		padding: .3rem;
		/*background: red;*/
	}
	
	.like-bottom .bottom-header {
		position: relative;
		width: 100%;
		height: 4.46666666rem;
		/*background: url(../../../public/img/like1.jpg) no-repeat;*/
		background-size: cover;
	}
	
	.like-bottom .bottom-header .header-info {
		position: absolute;
		bottom: .26rem;
		left: .26rem;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
	
	.like-bottom .bottom-header .header-info span:nth-child(1) {
		width: 6rem;
		font-size: .5rem;
		color: #fff;
		font-weight: 700;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.like-bottom .bottom-header .header-info span:nth-child(2) {
		font-size: .45rem;
		color: orange;
		font-weight: 500;
		margin-left: 1rem;
		margin-right: .3rem;
	}
	
	.like-bottom ul {
		display: flex;
		justify-content: center;
		margin-top: .3rem;
	}
	
	.like-bottom ul li {
		width: 2.96rem;
		/*flex: 1;*/
		margin: 0 .1rem;
	}
	
	.like-bottom ul li img {
		width: 100%;
		height: 1.9584rem;
	}
	
	.like-bottom ul li span.title {
		font-size: .35rem;
		margin-top: .2rem;
		color: #222;
		height: .6933333rem;
		width: 100%;
		display: block;
		-webkit-box-orient: vertical;
		/*white-space:nowrap;*/
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.like-bottom ul li .price {
		margin-top: .2rem;
		display: block;
		font-size: .5rem;
		color: orange;
		font-weight: 500;
		font-size: .35rem;
		text-align: center;
	}
</style>