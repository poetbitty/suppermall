<template>
	<div v-show="isshow" class="toast">
		<div class="message">{{message}}</div>
	</div>
</template>

<script>
	export default {
		name:"Toast",
		data(){
			return{
				isshow:false,
				message:'默认提示',
				
			}
		},
		methods:{
			show(text="默认toast",time=2000){
				this.isshow = true;
				this.message = text;
				setTimeout(()=>{
					this.isshow=false;
					this.message='';
				},time)
			}
			
		}
	}
</script>

<style>
	.toast{
		text-align: center;
		position: fixed;
		top: 50%;
		z-index: 999;
		margin-left: 50%;
		transform: translate(-50%,-50%);
	}
	.message{
		font-family: '新宋';
		border-radius: 0.3125rem;
		padding: 0.3125rem 0.625rem;
		color: white;
		text-align: center;
		background: rgba(0,0,0,0.7);
		
	}
</style>
