<template>
	
	<div class="swiper">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  :height="swiperheight"  >
		  <van-swipe-item v-for="(item,index) in swiperurl" >
				<img class="swiperimg" :src="item" alt="加载中..." />
			</van-swipe-item>
		  
		</van-swipe>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import {
		Swipe,
		SwipeItem
	} from 'vant';

	Vue.use(Swipe);
	Vue.use(SwipeItem);

	export default {
		name: 'Swiper',
		props:['swiperurl',"swiperheight"],
		data(){
			return{
				// imgurl:this.swiperurl,
			}
		},
		methods:{
			
		},
	
	}
</script>

<style>
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
		.swiper{
			margin-top: 2.75rem;
		}
		.swiperimg{
			width: 100%;
			/* height: 10rem; */
			overflow: hidden;
		}
		
</style>
