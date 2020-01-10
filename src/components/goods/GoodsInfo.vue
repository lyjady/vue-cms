<template>
    <div class="goods-info-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div ref="ball" class="ball" v-if="ballFlag"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe :swiperList="carouselList" :isFull="false"/>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>${{ goodsInfo.market_price }}</del>&nbsp;&nbsp;
                        销售价:
                        <span class="now-price">${{ goodsInfo.sell_price }}</span>
                    </p>
                    <p>购买数量:
                        <el-input-number v-model="num" :min="1" :max="goodsInfo.stock_quantity" label="描述文字" @change="changeNumber"/>
                    </p>
                    <P>
                        <el-button type="primary">立即购买</el-button>
                        <el-button type="danger" @click="addShopCart">加入购物车</el-button>
                    </P>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{ goodsInfo.goods_no }}</p>
                    <p>库存情况: {{ goodsInfo.stock_quantity }}</p>
                    <p>上架时间: {{ goodsInfo.add_time | dataFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <el-button class="goods-info-btn" type="primary" size="large" plain @click="goGoodsDesc(goodsInfo.id)">商品详情</el-button>
                <br>
                <el-button class="goods-info-btn" type="danger" size="large" plain @click="goComment(goodsInfo.id)">商品评论</el-button>
            </div>
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
                num: 1,
                goodsInfo: {},
                ballFlag: false
            }
        },
        methods: {
            getCarousel() {
                this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/' + this.id).then(response => {
                    if (response.body.status === 0) {
                        this.carouselList = response.body.message;
                    }
                })
            },
            getGoodsInfo() {
                this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/' + this.id).then(response => {
                    if (response.body.status === 0) {
                        this.goodsInfo = response.body.message[0];
                    }
                })
            },
            goComment(id) {
                this.$router.push({name: 'goodsComment', params: {id}})
            },
            goGoodsDesc(id) {
                this.$router.push({name: 'goodsDesc', params: {id}})
            },
            addShopCart() {
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el) {
                el.style.transform = 'translate(0, 0)';
            },
            enter(el, done) {
                let ballPosition = this.$refs.ball.getBoundingClientRect();
                let cartPosition = document.getElementById('cart').getBoundingClientRect();
                let x = cartPosition.left - ballPosition.left;
                let y = cartPosition.top - ballPosition.top;
                el.offsetWidth;
                el.style.transform = `translate(${x}px, ${y}px)`;
                el.style.transition = 'all 1s ease';
                done()
            },
            afterEnter(el) {
                this.ballFlag = !this.ballFlag;
            },
            changeNumber() {
                console.log('购买数量发生变化: ' + this.num)
            }
        },
        created() {
            this.getCarousel();
            this.getGoodsInfo();
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

    .mui-card-footer {
        display: block;
        text-align: center;
    }

    .goods-info-btn {
        width: 90%;
        margin: 10px 0;
    }

    .ball {
        background-color: red;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        transform: translate(170px, 370px);
    }
</style>
