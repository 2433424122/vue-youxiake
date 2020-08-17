<template>
	<div class="icons">
		<ul>
			<li v-for="item in iconsList" :key="item.index">
				<img :src="item.imgUrl" />
				<p>{{item.title}}</p>
			</li>
			<!--
				<li>
				<img src="../../../public/img/icons2.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons3.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons4.gif" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons5.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons6.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons7.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons8.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons9.png" />
				<p>国内游</p>
			</li>
			<li>
				<img src="../../../public/img/icons10.png" />
				<p>国内游</p>
			</li>
			-->

		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				iconsList: [{
						id: 0,
						imgUrl: 'img/icons1.png',
						title: '国内游'

					},
					{
						id: 1,
						imgUrl: 'img/icons2.png',
						title: '出境游'

					},
					{
						id: 2,
						imgUrl: 'img/icons3.png',
						title: '国内游'

					},
					{
						id: 3,
						imgUrl: 'img/icons4.gif',
						title: '国内游'

					},
					{
						id: 4,
						imgUrl: 'img/icons5.png',
						title: '国内游'

					},
					{
						id: 5,
						imgUrl: 'img/icons6.png',
						title: '国内游'

					},
					{
						id: 6,
						imgUrl: 'img/icons7.png',
						title: '国内游'

					},
					{
						id: 7,
						imgUrl: 'img/icons8.png',
						title: '国内游'

					},
					{
						id: 8,
						imgUrl: 'img/icons9.png',
						title: '国内游'

					},
					{
						id: 9,
						imgUrl: 'img/icons10.png',
						title: '国内游'

					}
				]
			}
		}
	}
</script>

<style scoped>
	.icons {
		padding: .4rem 0 .1rem 0;
		border-bottom: 1px solid #eee;
	}
	
	ul {
		overflow: hidden;
	}
	
	ul li {
		width: 20%;
		float: left;
		margin-bottom: .4rem;
		display: inline-block;
	}
	
	ul li img {
		margin-left: auto;
		margin-right: auto;
		display: block;
		width: 1.066666666rem;
		height: 1.0666666666rem;
	}
	
	ul li p {
		font-size: .37333333rem;
		text-align: center;
		margin-top: .1rem;
		color: #333;
	}
</style>