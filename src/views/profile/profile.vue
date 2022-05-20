<template>
	<div class="profile">
		<!-- <h2>我的</h2> -->
	  <navbar class="profilenavbar">
	  	<div slot="center">
	  		<h3>购物商城</h3>
	  	</div>
	  </navbar>
		<!-- 头像栏 -->
		<div  class="prifilehead">
			<div>
				<img class="touxiang" src="../../assets/img/touxiang.png" />
			</div>
			<div class="touxiangtext">
				<span>我是商城的SVIP用户</span><br />
			</div>
		</div>
		<!-- 余额，优惠，积分 -->
		<div class="profilemoney">
			<div class="moneyitem">
				<span class="moneynumber">35.26</span>元<br />
				<span >我的余额</span>
			</div>
		<div class="moneyitem">
			<span class="moneynumber">3</span>个<br />
			<span >我的优惠</span>
		</div>
		<div class="moneyitem">
			<span class="moneynumber">125</span>分<br />
			<span >我的积分</span>
		</div>
		</div>
		
		<div class="background"></div>
		<!-- 功能栏 -->
		
		<div class="grid-container">
			<div v-for="item in funlist">
				<div class="grid-item">
				<img class="grid-img" src="../../assets/img/jifen.png" />
        <div >{{item}}</div>
			  </div>
			</div> 
		</div>
	</div>
</template>

<script>
	import toast from '../../components/common/Toast/index.js';
	//引入标题栏
	import navbar from '../../components/content/Navbar/navbar.vue';
	
	export default {
		name:"Profile",
		components:{
			toast,
			navbar
		},
		data(){
			return{
				funlist:['我的消息','积分商城','会员卡','我的公益','账号与安全','商城客服','账号与安全','俱乐部','投诉通道'],
			}
		},
		methods:{
			click(){
				this.$toast.show('aaa',2000);
				
			}
		},
		
		
	}
</script>

<style scoped>
	
	.profile{
		font-family:'新宋';
	}
	
 .profilenavbar {
		background-color: #fd79a8;
		position: fixed;
		top: 0rem;
		margin: 0rem;
		z-index: 10;
		width: 100%;
		color: white;
		text-align: center;
	}
	
	.prifilehead{
		margin-top: 2.75rem;
		padding-top: 0.9375rem;
		background-color: #fd79a8;
		padding-bottom: 0.625rem;
		display: flex;
	}
	
	.touxiang{
		margin-left: 0.625rem;
		background-color: #81ECEC;
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 50%;
	}
	.touxiangtext{
		color: white;
		line-height: 4rem;
		margin-left: 0.4375rem;
		font-weight: 600;
		font-size: 1.125rem;
		
	}

	.profilemoney{
		display: flex;
		justify-content: space-around;
		text-align: center;
	}
	
	.moneyitem{
		margin-top: 0.9375rem;
		margin-bottom: 0.9375rem;
	}
	
	.moneynumber{
		font-weight: 600;
		color:orangered;
		font-size: 1.25rem;
	}
	
	.background{
		width: 100%;
		height: 0.4375rem;
		background-color: #eee;
	}
	
	.grid-container{
		margin-top:1.25rem;
		display: grid;
    grid-template-columns: 1fr 1fr 1fr;
		text-align: center;
	}
	
	.grid-item{
		text-align: center;
	  margin-top: 0.9375rem;
		font-size: 0.9375rem;
		font-weight: 600;
		color:#0086B3;
	}
	
	.grid-img{
		width: 2.5rem;
		height: 2.5rem;
	}
	
	
</style>
