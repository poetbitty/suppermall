<template>
	<div class="coatlistitem" @click="godetai">
		<div class="coatlistimg"><img :src="nitem" /></div>
		<span class="coatlisttext">{{ coattitle[index] | reveryear }}</span>
		<h3 class="coatlisth3">￥{{ coatprice[index] }}
		<van-icon class="coatlisticon" name="star" color="#d63031" />
		<a href="#" class="coatlistkeep">收藏</a>
		</h3>

	</div>
</template>

<script>
	//引入图标
	import Vue from 'vue';
	import { Icon } from 'vant';
	
	//使用图标
	Vue.use(Icon);
	
	export default{
		name:"Coatlistitem",
		props:["nitem","index","coattitle","coatprice","coatiid"],
		data(){
			return{
				
			}
		},
		methods:{
			godetai(){
				// console.log(this.coatiid);
				this.$router.push('/detai/'+this.coatiid);
			}
		},
		filters:{
			reveryear(str){	
				var reg = /2018/;
				let res = str.replace(reg,"2022");
				
				return res;
			}
			
		},
		created() {
			// console.log(this.coattitle[0]);
		},
	}
</script>

<style>
	.coatlistitem{
		width:9.6875rem;
		/* margin-bottom: 0.3125rem; */
		
	}
	.coatlistimg img{
		width: 9.6875rem;
		border-radius: 0.1875rem;
	}
	.coatlisttext{
		text-align: center;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: "新宋";
	}
	.coatlisth3{
		padding-left: 0.1875rem;
		line-height: 0.5rem;
		color: #d63031;
		font-size: 18px;
	}
	.coatlisticon{
		padding-left: 1.25rem;
		z-index: -100;
	}
	.coatlistkeep{
		padding-left: 0.1875rem;
		font-size: 0.9375rem;
		color: #e17055;
	}
</style>
