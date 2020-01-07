<template>
    <div>
        <swipe :swiperList="carouselList" :isFull="true"/>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newsList">
                        <img src="../../images/home/menu1.png">
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photoShare">
                        <img src="../../images/home/menu2.png">
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodsList">
                        <img src="../../images/home/menu3.png">
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/home/menu4.png">
                        <div class="mui-media-body">留言反馈</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/home/menu5.png">
                        <div class="mui-media-body">视频专区</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <img src="../../images/home/menu6.png">
                        <div class="mui-media-body">联系我们</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import Swipe from "../subComponents/Swipe.vue";

    export default {
        data() {
            return {
                carouselList: null
            }
        },
        methods: {
            getCarousel() {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(response => {
                    if (response.body.status === 0) {
                        this.carouselList = response.body.message;
                    } else {
                        Toast('轮播图请求失败');
                    }
                })
            }
        },
        created() {
            this.getCarousel();
        },
        components: {
            Swipe
        }
    }
</script>

<style scoped>
    .swipe {
        height: 200px;
    }

    img {
        height: 100%;
        width: 100%;
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
        img {
            width: 60px;
            height: 60px;
        }
    }

    li a img{
        height: 60px;
        width: 60px;
    }
</style>
