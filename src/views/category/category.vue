<template>
	<div class="category">
		<!-- <h2>分类</h2> -->
		<navbar class="categorynavbar">
			<div slot="center">
				<h3>分类</h3>
			</div>
		</navbar>
		<div>
			<van-sidebar id="sidebar" class="sidebar" v-model="activeKey" @change="onChange">
				<div v-for="item in classes">
					<van-sidebar-item :title="item" />
				</div>
			</van-sidebar>

		</div>
		<div class="grid" id="grid">
			<van-grid :column-num="2">
				<van-grid-item v-for="value in 30" :key="value" icon="photo-o" text="绿色2022新款" />
			</van-grid>
		</div>




	</div>
</template>

<script>
	//引入分类栏
	import {
		Sidebar,
		SidebarItem
	} from 'vant';

	Vue.use(Sidebar);
	Vue.use(SidebarItem);

	//引入网格布局
	import Vue from 'vue';
	import {
		Grid,
		GridItem
	} from 'vant';

	Vue.use(Grid);
	Vue.use(GridItem);

	//引入标题栏
	import navbar from '../../components/content/Navbar/navbar.vue';

	export default {
		name: "Category",
		components: {
			navbar,
		},
		data() {
			return {
				activeKey: 0,
				classes: ["正在流行", "上新", "裤子", "裙子", "内衣", "女鞋", "男友", "包包", "运动", "配饰", "美妆", "个护", "家具", "护肤", "祛痘", "厨房",
					"其他"
				],

			};
		},
		methods: {
			onChange(index) {
				console.log(index);
			},
		},
		mounted() {
			let scrollHeight = 580-44;    
			console.log(scrollHeight)
			// document.getElementById("sidebar").style.height= scrollHeight +"px";
			// document.getElementById("grid").style.height= 536 +"px";
		},
	}
</script>

<style scoped>
	.categorynavbar {
		background-color: #fd79a8;
		position: fixed;
		top: 0rem;
		margin: 0rem;
		z-index: 10;
		width: 100%;
		color: white;
		text-align: center;
	}

	.category {
		display: flex;
		justify-content: space-between;
	}

	.sidebar {
		overflow-y: scroll;
		padding-bottom: 3.125rem;
		padding-top: 2.75rem;
		height: 33.5rem;
	}

	.grid {
    height: 33.5rem;
		padding-bottom: 3.125rem;
		padding-top: 2.75rem;
		overflow-y: scroll;

	}
</style>
