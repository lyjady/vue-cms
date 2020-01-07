<template>
    <div>
        <van-card v-for="good in goodsList" :num="good.stock_quantity" :price="good.sell_price"
                  :desc="good.zhaiyao" :title="good.title" :thumb="good.img_url"
                  :origin-price="good.market_price" :key="good.id" @click="getGoodsInfo(good.id)"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageNumber: 1,
                goodsList: []
            }
        },
        methods: {
            getGoodsList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageIndex=' + this.pageNumber).then(response => {
                    if (response.body.status === 0) {
                        this.pageNumber++;
                        this.goodsList = response.body.message;
                    }
                })
            },
            getGoodsInfo(id) {
                this.$router.push('/goods/goodsInfo/' + id);
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>

<style scoped>

</style>
