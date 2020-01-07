import VueRouter from 'vue-router';
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import CartContainer from "./components/tabbar/CartContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoShare from "./components/photo/PhotoShare.vue";
import PhotoInfo from "./components/photo/PhotoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/cart', component: CartContainer},
        {path: '/search', component: SearchContainer},
        {path: '/news/newsList', component: NewsList},
        {path: '/news/newsInfo/:id', component: NewsInfo},
        {path: '/photo/photoShare', component: PhotoShare},
        {path: '/photo/photoInfo/:id', component: PhotoInfo},
        {path: '/goods/goodsList', component: GoodsList},
        {path: '/goods/goodsInfo/:id', component: GoodsInfo, name: 'goodsInfo'}
    ],
    linkActiveClass: 'mui-active'
});

export default router;
