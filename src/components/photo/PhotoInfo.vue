<template>
    <div class="photo-info-container">
        <h3 class="photo-info-title">{{ photoInfo.title }}</h3>
        <p class="photo-info-subtitle">
            <span>发表时间: {{ photoInfo.add_time | dataFormat }}</span>
            <span>点击: {{ photoInfo.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图 -->
        <div class="photo-container">
            <el-image class="photo" v-for="photo in photoList" :key="photo.src"
                      :src="photo.src" :preview-src-list="photo.srcArr"/>
        </div>

        <div class="photo-info-content" v-html="photoInfo.content"></div>

        <!-- 评论子组件 -->
        <comment :id="id"/>
    </div>
</template>

<script>
    import comment from '../subComponents/Comment.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                photoInfo: {},
                photoList: []
            }
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/getimageinfo/' + this.id).then(response => {
                    if (response.body.status === 0) {
                        this.photoInfo = response.body.message[0];
                    }
                })
            },
            getPhotoList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(response => {
                    if (response.body.status === 0) {
                        this.photoList = response.body.message;
                        this.photoList.forEach(item => {
                            item.srcArr = [item.src];
                        })
                    }
                })
            }
        },
        created() {
            this.getPhotoInfo();
            this.getPhotoList();
        },
        components: {
            comment
        }
    }
</script>

<style scoped>
    .photo-info-container {
        padding: 5px;
    }

    .photo-info-title {
        font-size: 14px;
        text-align: center;
        margin: 15px 0;
    }

    .photo-info-subtitle {
        display: flex;
        justify-content: space-between;
    }

    .photo-info-content {
        font-size: 13px;
        line-height: 30px;
    }

    .photo-container {
        width: 300px;
        margin: 0 auto;
    }
</style>
