import VueRouter from 'vue-router'

import HomeContainer from './components/tabber/HomeContainer.vue'
import ShopCarContainer from './components/tabber/ShopCarContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopCarContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/newsList', component: NewsList}
    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router