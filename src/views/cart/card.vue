<template>
	<div class="card"  >
		<div  class="card-item" v-for="item in carditem">
		<van-card @click="select(item)" :class="{isselect:item.ischeck==true}" :id="item.iid"
		  :num="item.num"
		  :price="item.price"
		  :title="item.name"
		  :thumb="item.image"
		>
		  <!-- <template #footer>
		    <van-button @click="sub_card" size="mini">删除</van-button>
		  </template> -->
		</van-card>
		
	</div>
	</div>
</template>

<script>
	//引入购物车商品列表
	import Vue from 'vue';
	import { Card } from 'vant';
	
	Vue.use(Card);
	
	export default{
		name:'Card',
		props:['carddata'],
		data(){
			return{
				carditem:[],
				totalprice:0,
			}
		},
		created() {
			this.carditem = this.$store.state.goods;
			// console.log(this.issend);
			// console.log(this.carditem);
			
		},
	  methods:{
			// sub_card(){
			// 	this.$store.commit("sub_card"); 
			// },
			select(item){
				if(item.ischeck){
					console.log("check");
					this.$store.commit("cancelcheck",item);
				}else{
					this.$store.commit("check",item);
				}
			},
			
		}
		
	}
</script>

<style>
	.card{
		padding: 0.1875rem;

	}
	.isselect{
			background-color: rgba(225, 112, 85, 0.5);	
	}
</style>
