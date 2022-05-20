<template>
	<div class="backtop">
		<van-icon class="back-img" name="back-top" size="35"  />
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import { Icon } from 'vant';
	
	Vue.use(Icon);
	
	export default{
		name:"Backtop"
	}
</script>

<style>
	.backtop{
		position: fixed;
		top: 28.125rem;
		left: 16.25rem;
		z-index: 100;
		background-color:#dfe6e9;
		border-radius: 50%;
	}
	.back-img{
		padding: 3px;
	}
</style>
