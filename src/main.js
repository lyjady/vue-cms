import Vue from 'vue';
import app from './App.vue';
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(mintUI);

import router from './router.js';

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
});