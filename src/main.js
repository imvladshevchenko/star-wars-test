import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);


document.title = "Star Wars"

const router = new VueRouter({
  router,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

