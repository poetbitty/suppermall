<template>
	<div class="hello">
		<van-tabbar route v-model="active" >
			<!-- class=" iconfont icon-fenlei"-->
			<van-tabbar-item icon="wap-home" replace to="/home">首页</van-tabbar-item>
			<van-tabbar-item icon="wap-nav" replace to="/category">分类</van-tabbar-item>
			<van-tabbar-item icon="shopping-cart" replace to="/cart">购物车</van-tabbar-item>
			<van-tabbar-item icon="manager" replace to="/profile">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	//导入图标库
	import 'assets/icon/font/iconfont.css';
	//导入vue核心库
	import Vue from 'vue';
	//导入vant核心库
	import {
		Button,
		Tabbar,
		TabbarItem
	} from 'vant';
	
	//使用vant组件
  Vue.use(Button);
	Vue.use(Tabbar);
	Vue.use(TabbarItem);


	export default {

		name: 'tabbar',
		data() {
			return {
				active: 0,
			};
		},
	}
</script>

<style scoped lang="scss">

</style>
