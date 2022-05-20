<template>
	<div class="feature">
		<div class="featuretext">本周流行</div>
		<img class="featureimg" src="../../assets/img/feature.jpg" />
	</div>
</template>

<script>
	export default {
		name:"Feature"
	}
</script>

<style>
	.featureimg{
		width: 20rem;
		height: 20rem;
		z-index: 1;
	}
	.featuretext{
		font-family: "新宋";
		padding-top:0.625rem;
		padding-bottom:0.375rem;
		text-align: center;
		font-weight: bold;
		
	}
</style>
