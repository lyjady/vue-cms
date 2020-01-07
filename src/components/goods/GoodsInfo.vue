<template>
    <div class="goods-info-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :swiperList="carouselList" :isFull="false"/>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>$2399</del>&nbsp;&nbsp;
                        销售价:
                        <span class="now-price">$2099</span>
                    </p>
                    <p>购买数量:
                        <el-input-number v-model="num" :min="1" :max="10" label="描述文字"/>
                    </p>
                    <P>
                        <el-button type="primary">立即购买</el-button>
                        <el-button type="danger">加入购物车</el-button>
                    </P>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import Swipe from "../subComponents/Swipe.vue";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                carouselList: [],
                num: 1
            }
        },
        methods: {
            getCarousel() {
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(response => {
                    if (response.body.status === 0) {
                        this.carouselList = response.body.message;
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
    .goods-info-container {
        background-color: #eee;
        overflow: hidden;
    }

    .now-price {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
</style>
