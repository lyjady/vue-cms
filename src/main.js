import Vue from 'vue';
import app from './App.vue';
import mintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';

Vue.use(mintUI);

const vm = new Vue({
    el: '#app',
    render: c => c(app)
});