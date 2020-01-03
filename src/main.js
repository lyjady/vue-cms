import Vue from 'vue';
import app from './App.vue';
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import moment from "moment";
import axios from 'axios';


Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(mintUI);
Vue.use(ElementUI);

Vue.http.options.emulateJSON = true;

Vue.filter('dataFormat', function (dataStr, pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
});

import router from './router.js';

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router
});