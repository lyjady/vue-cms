<template>
    <div class="cart-container">
        <div class="goods-list">
            <div class="mui-content">
                <div class="mui-card" v-for="(item, index) in cartList" :key="item.id">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <mt-switch></mt-switch>
                            <img :src="item.thumb_path"/>
                            <div class="info">
                                <h3>{{ item.title }}</h3>
                                <p>
                                    <span class="price">${{ item.sell_price }}</span>
                                    <el-input-number ref="number" v-model="$store.getters.getIdAndCount[item.id]" :min="1" :max="99"/>
                                    <a href="#">删除</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            结算区域
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cartList: [],
                num: 1
            }
        },
        methods: {
            getCartShopList: function () {
                let cartArr = JSON.parse(localStorage.getItem('cart') || '[]');
                if (cartArr.length > 0) {
                    let ids = [];
                    cartArr.forEach(item => {
                        ids.push(item.id)
                    });
                    this.$axios.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/' + ids.join(',')).then(response => {
                        if (response.status === 200) {
                           this.cartList = response.data.message;
                        }
                    })
                }
            },
            changeCount(index) {
                console.log(this.$refs.number[index].currentValue);
            }
        },
        created() {
            this.getCartShopList();
        }
    }
</script>

<style scoped>
    .cart-container {
        background-color: #eee;
        overflow: hidden;
    }

    .mui-card-content-inner img {
        height: 60px;
        width: 60px;
    }

    h3 {
        font-size: 13px;
    }

    .price {
        color: red;
        font-weight: bold;
    }

    .mui-card-content-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
