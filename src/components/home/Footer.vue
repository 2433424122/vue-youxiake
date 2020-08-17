<template>
	<div>
		<footer>
			<a href="#">
				<img src="../../assets/img/footer1.png" />
				<span>首页</span>
			</a>
			<a href="#">
				<img src="../../assets/img/footer2.png" />
				<span>订单</span>
			</a>
			<a href="#">
				<img src="../../assets/img/footer3.png"/>
				<span>个人中心</span>
			</a>
		</footer>

	</div>
</template>

<script>
</script>

<style scoped>
	footer {
		position: fixed;
		bottom: 0;
		z-index: 999;
		background: #fff;
		width: 100%;
		height: 1.4666666666rem;
		display: flex;
		
		
	}
	footer a{
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	footer a img{
		text-align: center;
		width: .72rem;
		height: .72rem;
		display: block;

		
	}
	footer a span{
		padding-top: .2rem;
		font-size: .35rem;
		display: block;
		
		
	}
</style>