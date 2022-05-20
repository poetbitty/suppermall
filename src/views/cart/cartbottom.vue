<template>
	<div class="cartbottom">
		<div>
			<slot name="left"></slot>
		</div>
		<div >
			<slot name="center"></slot>
		</div>
		<div >
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>

	
	export default{
		name:'Cartbottom',
		
	}
</script>

<style scoped>
	.cartbottom{
		height: 2.1875rem;
		background-color: #dfe6e9;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom:3.125rem;
		left: 0rem;
		right: 0rem;
		line-height:2.1875rem;
	}
</style>
