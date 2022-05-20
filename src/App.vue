<template>
  <div id="app">
		<Tabbar></Tabbar>
		<keep-alive>
					<router-view></router-view>
		</keep-alive>

		
  </div>
</template>

<script>
	import Tabbar from './components/content/Tabbar/tabbar.vue';

	   export default {
	        data(){
	            return {
	
	            }
	        },
	        components:{
	            Tabbar
	        }
	    }
</script>


<style lang="scss">

</style>
