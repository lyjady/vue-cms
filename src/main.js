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
import Vant from 'vant';
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';


Vue.prototype.$axios = axios;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(mintUI);
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Vuex);

const goodsList = JSON.parse(localStorage.getItem('cart') || '[]');

const store = new Vuex.Store({
    state: {
        goodsList: goodsList
    },
    mutations: {
        addGoodsToList(state, goods) {
            let flag = true;
            if (state.goodsList.length >= 1) {
                console.log(state.goodsList.length);
                state.goodsList.some(item => {
                    if (item.id === goods.id) {
                        flag = false;
                        item.count += parseInt(goods.count);
                        return true;
                    }
                });
            }
            if (flag) {
                state.goodsList.push(goods);
            }
            localStorage.setItem('cart', JSON.stringify(state.goodsList));
        }
    },
    getters: {
        getGoodsCount(state) {
            let count = 0;
            state.goodsList.forEach(item => {
                count += item.count;
            });
            return count;
        },
        getIdAndCount(state) {
            const obj = {};
            state.goodsList.forEach(item => {
                obj[item.id] = item.count;
            });
            return obj;
        }
    }
});

Vue.http.options.emulateJSON = true;

Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
});

import router from './router.js';
import fa from "element-ui/src/locale/lang/fa";
import it from "element-ui/src/locale/lang/it";

const vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router,
    store: store
});
