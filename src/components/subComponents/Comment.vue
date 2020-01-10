<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论的内容" maxlength="120" v-model="commentContent"/>
        <mt-button type="primary" size="large" @click="postNewsComment">发表评论</mt-button>
        <div class="comment-list" v-for="(comment, index) in newsCommentList">
            <div class="comment-item">
                <div class="comment-header">
                    <span>第{{ index + 1 }}楼</span>
                    <span>用户:{{ comment.userName }}</span>
                    <span>发表时间: {{ comment.addTime | dataFormat }}</span>
                </div>
                <div class="comment-body">
                    <span>{{ comment.content }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                pageIndex: 1,
                newsCommentList: [],
                commentContent: ''
            }
        },
        methods: {
            getNewsComment() {
                this.$http.get('http://127.0.0.1:8011/news/getNewsCommentList?pageNumber=' + this.pageIndex).then(response => {
                    if (response.status === 200) {
                        this.newsCommentList = this.newsCommentList.concat(response.body);
                        this.pageIndex++;
                    } else {
                        Toast('评论加载失败');
                    }
                })
            },
            getMoreComment() {
                this.getNewsComment();
            },
            postNewsComment() {
                if (this.commentContent.trim().length === 0) {
                    return Toast('请输入评论')
                }
                this.$http.post('http://127.0.0.1:8080/news/insertNewsComment', JSON.stringify({content: this.commentContent})).then(response => {
                    if (response.status === 200) {
                        Toast('评论成功');
                        this.newsCommentList.unshift(response.body);
                    } else {
                        Toast('评论失败');
                    }
                })
            },
            scrollBottom() {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const windowHeight  = document.documentElement.clientHeight || document.body.clientHeight;
                const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (scrollTop + windowHeight === scrollHeight) {
                    this.getMoreComment();
                }
            }
        },
        props: ["id"],
        created() {
            this.getNewsComment();
        },
        mounted() {
            window.addEventListener('scroll', this.scrollBottom);
        }
    }
</script>

<style scoped>
    .comment-container textarea {
        margin-bottom: 5px;
    }

    .comment-item {
        font-size: 13px;
    }

    .comment-list {
        margin: 5px 0 5px 0;
    }

    .comment-container .comment-header {
        line-height: 30px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        background-color: #bebec3;
    }

    .comment-body {
        line-height: 30px;
        text-indent: 2em;
    }
</style>
