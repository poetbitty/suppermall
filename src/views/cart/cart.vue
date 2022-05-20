<template>
	<div class="cart">
		<!-- <h2>购物车</h2> -->
		<cartnavbar class="cartnavbar" >
			<div slot="center">
				<h3>购物车</h3>
			</div>
		</cartnavbar>
		<cartnull v-show="$store.state.goods.length === 0"></cartnull>
		<carditem v-show="$store.state.goods.length != 0"></carditem>
		<cartbottom v-show="$store.state.goods.length != 0" class="cartbottom">
			<!-- <slot slot="left">
				<button class="cartbottom-button-sletall">全选</button>
			</slot> -->
			<slot slot="center">
				合计:￥{{totalprice}}
			</slot>
			<slot slot="right" >
				<button class="cartbottom-button-tocompet">
				 	购买
				</button>
			</slot>
		</cartbottom>
	</div>
</template>

<script>
	//引入carditem
	import carditem from './card.vue';
	//引入navbar
	import cartnavbar from '../../components/content/Navbar/navbar.vue';
	//引入购物车空时页面
	import cartnull from './cardnull.vue';
	//引入购物车底部计算
	import cartbottom from './cartbottom.vue';
	
	export default {
		name:"Cate",
		components:{
			carditem,
			cartnavbar,
			cartnull,
			cartbottom,
			
		},
		data(){
			return{
				computcard:[],
				
			}
		},
		computed:{
				totalprice(){
				 return	this.$store.state.goods.filter(item=>{
					 // console.log(item);
						return item.ischeck==true
						}).reduce((s,n)=>{
						return s+n.price*n.num;
					},0)
				}
		},
		methods:{
		}
		
	}
</script>

<style>
	.cart{

	}
	.cartnavbar{
		background-color:#fd79a8 ;
		color: white;
	}
	.cartbottom-button-sletall{
		width: 3.125rem;
		background-color: #81ecec;
		border: 0;
	}
	.cartbottom-button-tocompet{
		width: 4.375rem;
		color: white;
		background-color: #d63031;
		border: 0;
	}
</style>
