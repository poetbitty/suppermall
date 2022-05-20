<template>
	<div>
		<div class="tabtext-top"></div>
		<div class="tabtextbar">
				<div v-for="(item,index) in titles" class="tabtext-item" 
				:class="{active: index ===currentindex}"
				@click="changeindex(index)" >
					<span class="tabtext-child">{{item}}</span>
				</div>
		
		</div>
		
		
	</div>
	
</template>

<script>
	export default {
		name: "Tabtextbar",
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			}

		},
		data() {
			return {
				texts: this.titles,
				currentindex: 0,
			}
		},
		methods: {
			changeindex(index) {
				this.currentindex = index;
				this.$emit("tabclick",index);
			}
		}

	}
</script>

<style>
	.tabtextbar {
		display: flex;
		margin-bottom: 0.375rem;
		background-color: white;
		height: 2.5rem;
		
	}

	.tabtext-item {
		flex: 1;
		text-align: center;
		font-weight: "新宋";
		font-size: 1.0625rem;
		
	}

	.active {
		font-weight: 600;
		color: #d63031;
		
	}

	.tabtext-items {
		/* margin-bottom:0.625rem; */
		padding-bottom: 0.3125rem;
		line-height: 2.75rem;
	}
	.active span{
		border-bottom: #d63031 0.1875rem solid;
		
	}
	.tabtext-child{
		padding-top: 0.1875rem;
		padding-bottom: 0.1875rem;
		
	}
	.tabtext-top{
		height:0.3125rem;
		background-color: white;
	}
</style>
