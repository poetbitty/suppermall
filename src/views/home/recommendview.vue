<template>
	<div class="recommendout">
	<div class="recommendview">
		<div v-for="(item,index) in imgurl" class="recommendC">
			<img class="recommendimg" :src="item" />
			<div class="recommendtext">{{retitle[index]}}</div>
		</div>
	
	</div>
		<div class="empty"></div>
	</div>
</template>

<script>
	export default{
		name:"Recommendciew",
		props:['recommendviewurl','title'],
		data(){
			return {
				imgurl:[],
				retitle:[]
				
			}
		},
		created() {
			this.recommendviewurl.map(item =>{
				this.imgurl.push(item);
			})
			this.title.map(item =>{
				this.retitle.push(item);
			})
		}
			
			}
</script>

<style>

	.recommendview{
		/* padding-left: 0.3125rem; */
		padding-top: 0.3125rem;
		display: flex;
		justify-content: space-around;
		
	}
	.recommendimg{
		  padding-top: 0.1875rem;
			border-radius:100%;
			flex: 1;
			width: 4.375rem;
	}
	.recommendtext{
		text-align: center;
		font-family:"新宋";
	}
	.empty{
		height:0.625rem;
	  border-bottom: 0.5rem solid #eee;
	}
	.recommendout{
		/* background-color:#dfe6e9; */
	}
</style>
