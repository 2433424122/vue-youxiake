import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../components/home/Home'
const routes = [{
		path: '/',
		name: 'home',
		component: Home

	},
	{
		path: '/city',
		name: 'city',
		//  // route level code-splitting
		//  // this generates a separate chunk (about.[hash].js) for this route
		//  // which is lazy-loaded when the route is visited.
		component: () =>
			import('../components/city/City.vue')
	},
	{
		path: '/details',
		name: 'details',
		//  // route level code-splitting
		//  // this generates a separate chunk (about.[hash].js) for this route
		//  // which is lazy-loaded when the route is visited.
		component: () =>
			import('../components/details/Details.vue')
	}
]

const router = new VueRouter({
	//	mode: 'history',
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router