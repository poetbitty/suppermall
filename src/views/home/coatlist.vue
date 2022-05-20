<template>
	<div class="coatlist" >
		 <div v-for="(item,index) in coatimg" >
			<coatlistitem  class="coatlistitem" 
			:nitem="item" 
			:coattitle="coattitle" 
			:coatprice="coatprice" 
			:coatiid="coatiid[index]"
			:index="index" 
			></coatlistitem>
			<!--  :key="index" -->
		</div>
		
	</div>
</template>

<script>
	import coatlistitem from './coatlistitem.vue';
	
	export default{
		name:"Coatlist",
		props:['coatimg','coattitle','coatprice','coatiid'],
		data(){
			return{
				
					// coatimg:[],
					// coattitle:[],
					// prices:[]
			}
		},
		components:{
			coatlistitem
		},
		created() {
               
		},
		// watch:{
		// 	coattitle(val){
		// 		console.log(val);
		// 	}
			
		// }
	
		
	}
</script>

<style>
	.coatlist{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		
	}
	
	.coatlistitem{
	
	}
	
</style>
