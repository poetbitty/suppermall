<template>
	<coatlist :title="content"
	:coatlistviewurl="imgurl"
	:coatprice='detaiprice'
	></coatlist>
	
</template>

<script>
	
	import coatlist from '../home/coatlist.vue';
	
	export default{
		name:"Detaicoatlist",
		props:['title','coatlistviewurl','price'],
		components:{
			coatlist,
		},
		data(){
			return{
				content:[],
				imgurl:[],
				detaiprice:[],
			}
		},
		mounted() {
				// this.content.push(this.title);
				// this.imgurl.push(this.coatlistviewurl);
				// this.detaiprice.push(this.price);
				// 	console.log(this.title.length);
				// 	console.log(this.coatlistviewurl);
				// 	console.log(this.price);
		},
		methods:{
		},
		watch:{
			// price(val){
			// 	this.content.push(this.title);
			// 	this.imgurl.push(this.coatlistviewurl);
			// 	this.detaiprice.push(this.price);
			// 	// console.log(this.content);
			// }
			
		}
		
	}
	
	
</script>

<style>
	
	
</style>
