// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosPlugin from "./ajax"
import apiPlugin from "./common/api"
import iView from 'iview'
import moment from 'moment'
import 'iview/dist/styles/iview.css';
import 'normalize.css/normalize.css'

//console.log(iView)

Vue.use(iView);
Vue.config.productionTip = false
Vue.use(axiosPlugin);
Vue.use(apiPlugin);

Object.defineProperty(Vue.prototype,'moment',{
  value: moment
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
