import VueRouter from 'vue-router';
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import CartContainer from "./components/tabbar/CartContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import NewsList from "./components/news/NewsList.vue";
import NewsInfo from "./components/news/NewsInfo.vue";
import PhotoShare from "./components/photo/PhotoShare.vue";

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/cart', component: CartContainer},
        {path: '/search', component: SearchContainer},
        {path: '/news/newsList', component: NewsList},
        {path: '/news/newsInfo/:id', component: NewsInfo},
        {path: '/photo/photoShare', component: PhotoShare}
    ],
    linkActiveClass: 'mui-active'
});

export default router;