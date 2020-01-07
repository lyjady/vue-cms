<template>
    <div>
        <van-tabs @click="getPhotoList" sticky>
            <van-tab v-for="item in navigation" :key="item.id" :title="item.title"/>
        </van-tabs>
        <ul class="photo-list">
            <router-link tag="li" class="photo-item" v-for="item in list" :key="item.id" :to="'/photo/photoInfo/' + item.id">
                <img v-lazy="item.img_url"/>
                <div class="info">
                    <h1 class="title">{{ item.title }}</h1>
                    <div class="body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js';

    export default {
        data() {
            return {
                navigation: [
                    {id: 0, title: '全部'}
                ],
                list: []
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        },
        methods: {
            getImgCategory() {
                this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(response => {
                    if (response.body.status === 0) {
                        this.navigation = this.navigation.concat(response.body.message);
                    }
                })
            },
            getPhotoList(name, title) {
                this.navigation.forEach(item => {
                    if (item.title === title) {
                        this.$http.get('http://www.liulongbin.top:3005/api/getimages/' + item.id).then(response => {
                            if (response.body.status === 0) {
                                this.list = response.body.message;
                            }
                        })
                    }
                });
            }
        },
        created() {
            this.getImgCategory();
            this.getPhotoList('', '全部');
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list {
        padding: 10px;
        padding-bottom: 0;
    }

    .photo-item {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
    }

    .photo-list img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
    }

    img {
        width: 100%;
        vertical-align: middle;
    }

    .info {
        color: #ffffff;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
    }

    .title {
        font-size: 14px;
    }

    .body {
        font-size: 13px;
    }
</style>
