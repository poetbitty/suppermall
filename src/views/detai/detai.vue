<template>
	<div id="detai">
		<narbar class="detainavbar"></narbar>
		<!-- <bscroll class="detaiscroll" :probetype="3" @scrolly="scrollshow"> -->

		<swiper :swiperurl="swiperdata" :swiperheight="swiperheight" class="swiper"></swiper>
		
		<detaicontent :title="title"
		:oldprice="oldprice"
		:nowprice="nowprice"
		:activecontent="activecontent"
		:sale="sale"
		:shopname="shopname"
		:shopimg="shopimg"
		:shopnum="shopnum"
		:shoptonum="shoptonum"
		:score="score"
		:scoretop="scoretop"
		:scorecenter="scorecenter"
		:scorebottom="scorebottom"
		></detaicontent>
		
		<detaisort 
		:shopsizekey="shopsizekey" 
		:shopsizevalue="shopsizevalue"
		:detaiimg="detaiimg"
		></detaisort>

		<goodsaction @add_cart="add_cart"></goodsaction>
		<detaicoatlist
		 :title="detaititle"
		 :coatlistviewurl="detaiimg"
		 :price="detaiprice"
		 > </detaicoatlist>
	<!-- </bscroll> -->
	</div>
</template>

<!-- <script src="./getdetaidata.js"></script> -->
<script>
	
	
	import detaisort from './detaisort.vue';
	import narbar from './navbar.vue';
	import detaicontent from './detaicontent.vue';
	import swiper from '../home/swiper.vue';
	import bscroll from '../../components/common/Bscroll/bscroll.js';
	import { getdetailjson, getdetailcoatlist} from '../../network/detai.js';
	import detaicoatlist from './detaicoatlist.vue';
	import goodsaction from './goodsaction.vue';
	
	export default{
		name:"detai",
		data(){
			return{
				id:0,
				swiperheight:300,
				//轮播图数据
				swiperdata:[],
				//标题
				title:[],
				//原价，现价，活动
				oldprice:0,
				nowprice:0,
				activecontent:"",
				//销量，收藏，速发货
				sale:[],
				//商品店铺照片，名称
				shopname:'',
				shopimg:'',
				//商品总销量和全部宝贝
				shopnum:0,
				shoptonum:0,
				//描述相符
				score:[],
				scoretop:[],
				scorecenter:[],
				scorebottom:[],
				//尺寸，尺码
				shopsizekey:[],
				shopsizevalue:[],
				//详情图片
				detaiimg:[],
				detaititle:[],
				detaiprice:[]
			}
		},
		activated() {
			
			getdetailjson(this.$route.params.iid).then(res=>{
				let data =  res.data.result;
				//轮播图数据
				this.swiperdata = data.itemInfo.topImages;
				//标题
				this.title = data.skuInfo.title;
				//原价，现价，活动
				this.oldprice = data.itemInfo.lowNowPrice;
				this.nowprice = data.itemInfo.lowPrice;
				this.activecontent = data.itemInfo.discountDesc;
				//销量，收藏，速发货
				this.sale = data.clumns;
				//商品店铺照片，名称
				this.shopname = data.shopInfo.name;
				this.shopimg = data.shopInfo.shopLogo;
				//商品总销量和全部宝贝
				this.shopnum = data.shopInfo.cGoods;
				this.shoptonum = data.shopInfo.cSells;
				//描述相符
				      this.score = data.shopInfo.score;
							this.scorecenter.splice(0,3);
			      	data.shopInfo.score.map(item =>{
			        this.scoretop.push(item.name);
							this.scorecenter.push(item.score);
							this.scorebottom.push(item.isBetter);
				});
				
				// console.log(this.scorecenter);
				//尺寸，尺码
				data.itemParams.info.set.map(item =>{
					this.shopsizekey.push(item.key);
					this.shopsizevalue.push(item.value);
				});
        

			})
			
			//获取推荐数据
			getdetailcoatlist().then(res=>{
				let data = res.data.data.list;
				//详情图片
				data.map(item=>{
					this.detaiimg.push(item.image);
					this.detaititle.push(item.title);
					this.detaiprice.push(item.discountPrice);
				})
			})
			
		},
		components:{
			narbar,
			swiper,
			detaicontent,
			bscroll,
			detaisort,
			detaicoatlist,
			goodsaction,
			
		},
		methods:{
			scrollshow(position){
				// console.log(position);
			},
			add_cart(){
				
				let goods = {
					iid:this.$route.params.iid,
					name:this.shopname,
					image:this.shopimg,
					price:this.nowprice,
					num:1,
					ischeck:true,
				}
				
				this.$store.commit('add_goods',goods);
				
				
			}
		}
		
	}
</script>

<style scoped>
	.swiper{
		margin-top: 44px;
	}
	#detai{
		position: relative;
		background: #fff;
		z-index: 9;
	}
	.detaiscroll{
		height: calc(100%-44px);
	}
	.detainavbar{
		position:fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}
</style>
