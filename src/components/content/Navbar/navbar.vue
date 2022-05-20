<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
	
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style>
	.navbar{
		display: flex;
		height: 2.75rem;
		line-height: 0.4375rem;
		text-align: center;
	}
	.left,.right{
		width: 3.75rem;
		/* background-color: #0077AA; */
	}
	.center{
		flex: 1;
		/* background-color: #07C160; */
	}
</style>
