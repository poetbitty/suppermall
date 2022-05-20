<template>
	<div class="goodsaction">
		
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
		  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
		  <van-goods-action-button
		    type="danger"
		    text="加入购物车"
		    @click="add_cart"
		  />
		</van-goods-action>
		
	</div>
</template>

<script>
	//引入底部详情购买栏
	import Vue from 'vue';
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	
	Vue.use(GoodsAction);
	Vue.use(GoodsActionButton);
	Vue.use(GoodsActionIcon);
	//引入toast
	import { Toast } from 'vant';
	export default {
		name:'Goodsaction',
		 methods: {
		    onClickIcon() {
		      Toast('点击图标');
		    },
		    add_cart() {
		       Toast('已加入购物车');
					 this.$emit('add_cart');
		    },
		  },
	}
</script>

<style>
</style>
