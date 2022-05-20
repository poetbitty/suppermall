<template>
	<div id="home">

		<!-- <tabtextbar :titles="tabtextbar" @tabclick="tabclick" ref="tabtextbar"></tabtextbar> -->
		<!-- 回顶 -->
		<backtop @click.native="backtopclick" v-show="scrollshwo"></backtop>

		<!-- //头部栏 -->
		<navbar class="home-nav">
			<div slot="center">
				<h3 class="home-nav-text">购物街</h3>
			</div>
		</navbar>

		<!-- home中 ##新品 特卖 潮流## -->
		<tabtextbar ref="tabtextbar1" :titles="tabtextbar" @tabclick="tabclick" v-show="isattract"
			style=" line-height:125px; position: relative; z-index: 3; background-color: white; width: 100%; height: 95px; ">
		</tabtextbar>

		<bscroll class="count" ref="scroll" :probetype="3" @scrolly="scrollshow" @scrollmore="scrollloadmore"
			:pullupload="true">

			<!-- //轮播图 -->
			<swiper :swiperurl='swiperimg' :swiperheight='swiperheight' :key="swiperimg[0]"></swiper>

			<!-- //商城热卖 -->
			<recommendview :recommendviewurl='recommendimg' :title="title" :key="recommendimg[0]"></recommendview>

			<!-- home中 ##本周流行## -->
			<featureview></featureview>

			<!-- home中 ##新品 特卖 潮流## -->
			<tabtextbar ref="tabtextbar" :titles="tabtextbar" @tabclick="tabclick" v-show="!isattract"></tabtextbar>



			<!-- home中商品列表 -->
			<coatlist 
			:coatimg="goods[type].coatlistimg" 
			:coattitle="goods[type].coatlisttitle"
			:coatprice="goods[type].coatlistprice"
			:coatiid="goods[type].coatlistiid"
			></coatlist>

		</bscroll>



	</div>

</template>

<script>
	//组件导入
	import Vue from 'vue';
	import navbar from '../../components/content/Navbar/navbar.vue';
	import swiper from './swiper.vue';
	import recommendview from './recommendview.vue';
	import featureview from './featurnview.vue';
	import tabtextbar from './tabtextbar.vue';
	import coatlist from './coatlist.vue';
	import backtop from './backtop.vue';


	//滑动组件
	import bscroll from '../../components/common/Bscroll/bscroll.vue';

	//网络请求
	import {
		gethomedata,
		gethomejson,
		getlistjson
	} from '../../network/home.js';

	//获取首页list数据
	import {
		data1to,
		data2to,
		datato
	} from "./data.js"


	export default {

		data() {
			return {
				//轮播图
				swiperimg: [],
				swiperheight:166,
				//商场热卖
				title: [],
				recommendimg: [],
				//分类栏
				tabtextbar: ["新品", "特卖", "潮流"],
				index: 0,
				//分类栏固定
				offsettop: 0,
				//吸顶
				isattract: false,
				//商品数据
				goods: {
					'pop': {
						page: 0,
						coatlistimg: [],
						coatlisttitle: [],
						coatlistprice: [],
						coatlistiid:[]
					},
					'new': {
						page: 0,
						coatlistimg: [],
						coatlisttitle: [],
						coatlistprice: [],
						coatlistiid:[]
					},
					'sell': {
						page: 0,
						coatlistimg: [],
						coatlisttitle: [],
						coatlistprice: [],
						coatlistiid:[]
					},
				},
				type: 'pop',

				listmake: [],
				//滑动y轴
				scrollshwo: false,
				//记录滑动次数
				scrollnum: 0,
				//记录下拉加载更多页数
				scrollmorepage: 1,
				//记录home离开状态
				scrolly: 0,

			}
		},

		components: {
			navbar,
			swiper,
			recommendview,
			featureview,
			tabtextbar,
			coatlist,
			bscroll,
			backtop,

		},


		created() {
			// gethomedata().then(res => {
			// 	//获取数据
			// 	// this.swiperimg = res.data.navimg;
			// 	// this.recommendimg = res.data.recommendviewimg;
			// 	// this.title = res.data.recommendviewtitle;
			// 	//获取列表数据
			// 	// this.loadlistdata(4)
			// 	// this.listmake = this.list1;
			// 	// console.log(res.data.navimg);
			// })

			this.gethomejson();
			this.getlistjson();
			// this.getlistjson('new'); 
			// this.getlistjson('sell');
					// this.type = 'sell';
					// this.getlistjson(0);
					// console.log(this.goods[this.type].coatlistprice);
        },
		mounted() {
			// this.offsettop = this.$refs.tabtextbar.$el.offsetTop;

		},

		activated() {
			this.$refs.scroll.scrollTo(0, this.scroll, 0);
		},

		deactivated() {
			this.scroll = this.$refs.scroll.scroll.y;
			// console.log(this.scroll);
		},

		methods: {

			getlistjson(change=1) {
				let page = this.goods[this.type].page + 1;
				getlistjson(this.type, page).then(res => {
					// this.goods[this.type].list.push(...res.data.data.list);
					if (change) {
						this.goods[this.type].page += 1;
					}
					// console.log(res.data.data.list);
					//获取商品列表数据
					let list = res.data.data.list;
					list.map(item => {
						// console.log(item);
						this.goods[this.type].coatlistimg.push(item.show.img);
						this.goods[this.type].coatlisttitle.push(item.title);
						this.goods[this.type].coatlistprice.push(item.price);
						this.goods[this.type].coatlistiid.push(item.iid);
					})
					
				})
			},
			gethomejson() {
				gethomejson().then(res => {
					let resour = JSON.parse(JSON.stringify(res));
					const data = resour.data.data;
					//获取数据
					// console.log(data.recommend.list);

					// data.recommend.list
					data.banner.list.map(item => {
						this.swiperimg.push(item.image)

					})
					data.recommend.list.map(item => {
						this.recommendimg.push(item.image)
						this.title.push(item.title)
					})

				})

			},

			tabclick(index) {
				//把当前分类栏状态保存起来
				this.index = index;
				if (index == 0) {
					this.listmake = this.list1;
					this.type = 'pop';
					this.getlistjson(0);
				} else if (index == 1) {
					this.listmake = this.list2;
					this.type = 'new';
					this.getlistjson(0);
				} else {
					this.listmake = this.list3;
					this.type = 'sell';
					this.getlistjson(0);
					
				}
				//切换自动到顶
				// this.$refs.scroll.scrollmore();
					this.$refs.scroll.scrollTo(0,-712,300);
				
				//同步切换状态
				this.$refs.tabtextbar.currentindex = index;
				this.$refs.tabtextbar1.currentindex = index;
				// console.log(this.goods[this.type].coatlistimg.length);
				
			},

			backtopclick() {
				this.$refs.scroll.scrollTo(0, -712, 500);
			},

			scrollshow(position) {
				// console.log(-position.y);
				this.scrollshwo = -position.y > 1000;
				if (-position.y > 655) {
					this.isattract = true;
				} else if (-position.y < 690) {
					this.isattract = false;
				}
				if (this.isattract && this.scrollnum < 1) {
					this.$refs.scroll.scrollTo(0, -700, 0);
					this.scrollnum++;
				}
				if (!this.isattract) {
					this.scrollnum = 0;
				}
				// console.log(position);
			},

			scrollloadmore() {
          this.getlistjson();
				// console.log(this.list1.length);

			},

			//加载商品数据
			// loadlistdata(list = 4, listnum = 1) {
			// 	switch (list) {
			// 		case 1:
			// 			this.list1 = datato(listnum);
			// 			this.listmake = this.list1;
			// 			break;
			// 		case 2:
			// 			this.list2 = data1to(listnum);
			// 			this.listmake = this.list2;
			// 			break;
			// 		case 3:
			// 			this.list3 = data2to(listnum);
			// 			this.listmake = this.list3;
			// 			break;
			// 		case 4:
			// 			this.list1 = datato(listnum);
			// 			this.list2 = data1to(listnum);
			// 			this.list3 = data2to(listnum);
			// 			this.listmake = this.list1;
			// 			break;


			// 	}



			// }

		}


	}
</script>

<style scoped>
	.home-nav {
		background-color: #fd79a8;
		position: fixed;
		top: 0rem;
		margin: 0rem;
		z-index: 10;
		width: 100%;
		color: white;
	}

	.wrapper {
		height: 31.25rem;
	}

	.count {
		height: calc(100vh - 50px);
	}

	.tabtextbar2 {
		margin-top: 2.75rem;
	}
</style>
