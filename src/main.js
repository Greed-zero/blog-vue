import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from '@/router/index'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(VueRouter)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
