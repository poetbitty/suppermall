<template>
	<div class="detaisort">
		<!-- 商品图片展示 -->
		<div v-for="item in imgshow">
			<img :src="item" class="imgshow" />
		</div>
		<!-- 商品参数列表 -->
		<div class="top"></div>
		<div v-for="(item,index) in keys">
		<div class="content">
			<div class="conleft">{{item}}</div>
			<div class="conright">{{values[index]}}</div>
		</div>
		<div class="bottom"></div>
		</div>
		

		
	</div>
</template>

<script>
	export default{
		name:"Detaisort",
		props:['shopsizevalue','shopsizekey','detaiimg'],
		data(){
			return{
				values:[],
				keys:[],
				imgshow:[],
			}
		},
		
		beforeMount() {
		 setTimeout(()=>{
			 this.shopsizekey.map(item=>{
				 this.keys.push(item);
			 })
			 this.shopsizevalue.map(item=>{
			 		this.values.push(item);
			 })
			 this.detaiimg.map(item=>{
			 		this.imgshow.push(item);
			 })
			 // console.log(this.shopsizekey.length);
		 },1000)
		 
			
		}
		
	}
</script>

<style scoped>
	.top{
		margin-left: 0.625rem;
		margin-right: 0.625rem;
		padding-top: 1.25rem;
		padding-bottom: 0.1875rem;
		border-bottom: solid #dfe6e9 0.0625rem;
		box-shadow: 0px 1px #dfe6e9 ;
	}
	.content{
		padding-top: 0.625rem;
		padding-bottom: 0.625rem;
		display: flex;
		font-family: "新宋";
		font-weight: 500;
	}
	.conleft{
		padding-left: 0.9375rem;
	}
	.conright{
		padding-left: 3.125rem;
		color: red;
		text-align: center;
	}
	.bottom{
		display:block;
		margin-left: 0.625rem;
		margin-right: 0.625rem;
		height: 0.0625rem;
		border-bottom: solid #dfe6e9 0.0625rem;
		box-shadow: 0px 1px #dfe6e9 ;
	}
	.imgshow{
		width: 100%;
	}
</style>
