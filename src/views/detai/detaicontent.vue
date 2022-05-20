<template>
	<div class="detaicontent">
		<!-- 详情文字 -->
		 <div class="contenttext">
			 {{title}}
		 </div>
		 <!-- 价格 -->
		 <div class="price">
			 <span class="main">{{nowprice}}</span>
			 <span class="min">{{oldprice}}</span>
			 <div class="activeprice">{{activecontent}}</div>
		 </div>
		 <!-- 销量 -->
		 <div class="sale">
			<!-- <div>{{sale[0]}}</div>
			 <div>{{sale[1]}}</div>
			 <div>{{sale[2]}}</div> -->
		 </div>
		 <!-- 退货 -->
		 <div class="ensure">
			 <div>
				 <img class="iconimg" src="../../assets/img/baozhang.png" />退货补运费
			 </div>
			 <div>
			 	<img class="iconimg" src="../../assets/img/baozhang.png" />全国包邮
			  </div>
			 <div>
			 	 <img class="iconimg" src="../../assets/img/baozhang.png" />7天无理由退货
			 </div>
		 </div>
		 <!-- 商店 -->
		 <div class="shop">
			 <img class="shopimg" :src="shopimg" />
			 <div class="shopname">
				 {{shopname}}
				 <!-- zeuuuuu -->
			 </div>
		 </div>
		 <!-- 商店信息 -->
		 <div class="shopinfo">
			 <div class="saleinfo">
				 <div class="saleitem">
					 <div>{{shoptonum | addw}}</div>
					 <div>总销量</div>
				 </div>
				 <div class="saleitem">
					 <div>{{shopnum}}</div>
					 <div>全国宝贝</div>
				 </div>
			 </div>
			 <img class="fenge" src="../../assets/img/fenge.png" />
			 <div class="mark">
				 <div class="markinfo">{{scoretop[0]}}
				 <span class="marknum">{{scorecenter[0]}}</span>
				 <img class="markimg" src="../../assets/img/markH.png"/>
				 </div>
			 	 <div class="markinfo">{{scoretop[1]}}
					<span class="marknum">{{scorecenter[1]+".00"}}</span>
					<img class="markimg" src="../../assets/img/markH.png"/>
					</div>

					<div class="markinfo">{{scoretop[2]}}
					<span class="marknum">{{scorecenter[2]}}</span>
				 <img class="markimg" src="../../assets/img/markH.png"/>

				 </div>
			 </div>
			 
		 </div>
		 <!-- 进店逛逛 -->
		 <div class="goshopplay">
			 <div class="goshopinfo">进店逛逛</div>
		 </div>
		 <div class="bottom"></div>
	</div>
	
</template>

<script>
	export default{
		name:"Detaicontent",
		props:['oldprice','nowprice','activecontent','sale',
		'shopname','shopimg','shopnum','shoptonum','score',
		'scoretop','scorecenter','scorebottom','title'],
		data(){
			return{
				
			}
		},
		created() {
		},
		methods:{
			
		},
		filters:{
			addw(value){
				if(value>10000){
					value = value/10000;
					return  value.toFixed(1)+ '万';
				}
				return value;
			}
		},
		
	}
</script>

<style scoped>
	.detaicontent{
		font-family: "新宋";
	}
	.contenttext{
		margin-top: 1rem;
		margin-left: 0.4375rem;
		margin-right: 0.3125rem;
		margin-bottom: 0.75rem;
		font-weight: 500;
	}
	.main{
		margin-left: 0.4375rem;
		color: red;
		font-size: 1.25rem;
	}
	.min{
		margin-left: 0.4375rem;
		color: #b2bec3;
		text-decoration:line-through;
		font-size: 0.625rem;
	}
	.activeprice{
		float: right;
		margin-right: 8.3125rem;
		background-color: #ff7675;
		color: white;
		width: 3rem;
		height: 1.3125rem;
		border-radius: 0.5rem;
		font-size: 0.625rem;
		text-align: center;
		line-height: 1.3125rem;
	}
	.sale{
		color:#b2bec3 ;
		margin-top: 0.75rem;
		display: flex;
		justify-content:space-between;
		margin-left: 0.3125rem;
		margin-right: 0.3125rem;
		font-size: 0.8125rem;
		box-shadow:#b2bec3 0.5rem;
		padding-bottom: 0.1875rem;
		border-bottom: solid #dfe6e9 0.0625rem;
		box-shadow: 0px 1px #dfe6e9 ;
	}
	.ensure{
		margin-top: 0.9375rem;
		padding-left: 0.1875rem;
		padding-right: 0.1875rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.8125rem;
		padding-bottom: 0.75rem;
		border-bottom: solid #dfe6e9 0.0625rem;
		box-shadow: 0px 2px #dfe6e9 ;
		font-family: "新宋";
		font-weight: 500;
	}
	.iconimg{
		width: 0.9375rem;
		height: 0.9375rem;
	}
	.shop{
		padding-top: 1.5625rem;
		padding-left: 0.625rem;
		display: flex;
	}
	.shopimg{
		border: #dfe6e9 1px solid;
		border-radius: 50%;
		width: 2.5rem;
		height: 2.5rem;
		
	}
	.shopname{
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 10rem;
		line-height: 2.625rem;
		color: #636e72;
		font-weight: 500;
	}
	.shopinfo{
		display: flex;
		margin-top: 15px;
	}
	.saleinfo{
	  padding-top: 1.875rem;
		width: 50%;
		display: flex;
	}
	.saleitem{
		flex: 1;
		text-align: center;
		font-family: "新宋";
		font-weight: 500;
		font-size: 0.9375rem;
		height: 4.375rem;
	}
	.mark{
		display: flex;
		justify-content: space-evenly; /* 水平均匀分布 */
		align-items: center;/* 垂直居中 */
		flex-direction: column;
	}
	.markinfo{
    
		font-size: 0.8125rem;
		font-family: "新宋";
		line-height: 1.0625rem;
	}
	.markimg{
		width: 0.9375rem;
		height: 0.9375rem;
		
	}
	.marknum{
		color: red;
	}
	.goshopinfo{
		margin-top: 0.625rem;
		margin:0 auto;
		text-align: center;	
		font-family: "新宋";
		border-radius:  0.3125rem;
		line-height: 1.875rem;
		width: 6.875rem;
		height: 1.875rem;
		background-color: #dfe6e9;
	}
	
	.bottom{
		display:block;
		margin-top: 0.625rem;
		margin-left: 0.625rem;
		margin-right: 0.625rem;
		height: 0.0625rem;
		border-bottom: solid #dfe6e9 0.0625rem;
		box-shadow: 0px 1px #dfe6e9 ;
	}
	
</style>
