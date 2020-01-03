<template>
    <div class="news-list-container">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
                <router-link class="mui-navigate-right" :to="'/news/newsInfo/' + news.id">
                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
                    <div class="mui-media-body">
                        <h1>{{ news.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{ news.add_time | dataFormat }}</span>
                            <span>点击次数: {{ news.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getNewsList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(response => {
                    if (response.body.status === 0) {
                        this.newsList = response.body.message;
                    } else {
                        Toast('加载新闻列表失败');
                    }
                })
            }
        },
        created() {
            this.getNewsList();
        }
    }
</script>

<style scoped>
    .mui-table-view h1 {
        font-size: 14px;
    }

    .mui-table-view .mui-ellipsis {
        font-size: 11px;
        color: #6d6d72;
        display: flex;
        justify-content: space-between;
    }
</style>