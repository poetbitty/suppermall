<template>
	<div>
		<navbar>
			<slot slot="left">
				<van-icon @click="navimgclick" name="arrow-left" class="navicon" size="20px" />
			</slot>
			<slot slot="center">
				 <div class="navbar">
				<div v-for="(item,index) in titles" class="nav-item" @click="select(index)" :class="{navselect: currindex==index}" > {{item}} </div>
				</div>
			</slot>
		</navbar>
	</div>
</template>

<script>
	import navbar from '../../components/content/Navbar/navbar.vue';
	
	import Vue from 'vue';
	import { Icon } from 'vant';
	
	Vue.use(Icon);
	
	export default{
		name:"Navbar",
		components:{
			navbar
		},
		data(){
			return{
			   titles:["商品","参数","评论","参数"],
					 currindex:0,
			}
		},
		methods:{
			select(index){
				this.currindex = index;
			},
			navimgclick(){
				this.$router.back();
			}
		},
		
	}
</script>

<style scoped>
	.navbar{
		display: flex;
		background-color: #dfe6e9;
		
	}
	
	.nav-item{
		padding-top: 18px;
		flex: 1;
		font-weight: 450;
	}
	
	.navselect{
		color: red;
	}
	
	.navicon{
		margin-top: 13px;
	}
</style>
