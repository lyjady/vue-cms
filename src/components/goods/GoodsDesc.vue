<template>
    <div class="goods-desc-container">
        <div class="goods-desc-title">{{ goodsDesc.title }}</div>
        <hr>
        <div class="goods-desc-content" v-html="goodsDesc.content"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodsDesc: {}
            }
        },
        methods: {
            getGoodsDesc() {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/' + this.$route.params.id).then(response => {
                    if (response.body.status === 0) {
                        this.goodsDesc = response.body.message[0];
                    }
                })
            }
        },
        created() {
            this.getGoodsDesc();
        }
    }
</script>

<style>
    .goods-desc-container {
        padding: 10px;
    }

    .goods-desc-title {
        text-align: center;
        font-size: 20px;
        margin: 15px 0;
    }

    .goods-desc-content img {
        width: 100%;
    }
</style>
