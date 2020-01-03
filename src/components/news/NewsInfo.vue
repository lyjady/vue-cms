<template>
    <div class="news-info-container">
        <h3 class="news-title">{{ newsInfo.title }}</h3>
        <p class="news-subtitle">
            <span>发表时间: {{ newsInfo.add_time | dataFormat }}</span>
            <span>点击次数: {{ newsInfo.click }}次</span>
        </p>
        <hr>
        <div class="news-content" v-html="newsInfo.content"></div>
        <comment :id="newsId"></comment>
    </div>
</template>

<script>
    import Comment from '../subComponents/Comment.vue';
    import {Toast} from 'mint-ui';
    export default {
        data() {
            return {
                newsId: this.$route.params.id,
                newsInfo: {}
            }
        },
        methods: {
            getNewsInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnew/' + this.newsId).then(response => {
                    if (response.body.status === 0) {
                        this.newsInfo = response.body.message[0];
                    } else {
                        Toast('加载新闻详情失败');
                    }
                })
            }
        },
        components: {
            'comment': Comment
        },
        created() {
            this.getNewsInfo();
        }
    }
</script>

<style>
    .news-info-container {
        padding: 0 4px;
    }
    .news-info-container .news-title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
    }

    .news-info-container .news-subtitle {
        display: flex;
        justify-content: space-between;
    }

    .news-content img {
        width: 100%;
        height: 100%;
    }
</style>