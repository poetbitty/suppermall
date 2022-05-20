import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue');
const Cart = () => import('../views/cart/cart.vue');
const Category = () => import('../views/category/category.vue');
const Profile = () => import('../views/profile/profile.vue');
const Detai = () => import('../views/detai/detai.vue');
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect:'/profile'
	},
  {
    path: '/home',
    component: Home
  },
	{
	  path: '/cart',
	  component: Cart
	},
	{
	  path: '/category',
	  component: Category
	},
	{
	  path: '/profile',
	  component: Profile
	},
	{
		path: '/detai/:iid',
		component: Detai
	}
	
]

const router = new VueRouter({
	
  routes,
	mode:"history"
})

export default router
