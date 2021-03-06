import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//reset.css==>重置样式
import './assets/css/reset.css'
//fastClick==》解决click事件在移动端300ms延时的问题
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入字体图标
import './assets/css/iconfont.css'
//引入适配font.js
import './assets/js/font.js'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.css'
//引入animate.css动画
import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss);
//引入axios
import axios from 'axios'
Vue.prototype.axios=axios


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')