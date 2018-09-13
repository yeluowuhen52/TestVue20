//入口文件
import Vue from 'vue'
import app from './App.vue'
//导入路由
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import { Field,List } from 'vant'
import { Step, Steps   } from 'vant'
Vue.use(Step).use(Steps)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Field)
Vue.use(List)
Vue.use(Vant)

import { Header, Swipe, SwipeItem ,Loadmore,Spinner,Switch,Button   } from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)
Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button);

//mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//
import router from './router.js'

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})