<template>
    <div class="cart-container">
        <div class="goods-list">
            <div class="mui-content">
                <div class="mui-card" v-for="(item, index) in cartList" :key="item.id">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <mt-switch v-model="$store.getters.getSelected[item.id]" @change="changeSelected(item.id, $store.getters.getSelected[item.id])"/>
                            <img :src="item.thumb_path"/>
                            <div class="info">
                                <h3>{{ item.title }}</h3>
                                <p>
                                    <span class="price">${{ item.sell_price }}</span>
                                    <el-input-number ref="number" v-model="$store.getters.getIdAndCount[item.id]" :min="1" :max="99"/>
                                    <a href="#" @click.prevent="removeCart(item.id, index)">删除</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mui-card">
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <div class="left">
                                <p>总计(不含运费)</p>
                                <p>
                                    已勾选商品
                                    <span class="settlement">{{ $store.getters.getSettlementData.count }}</span>件,
                                    总价<span class="settlement">${{ $store.getters.getSettlementData.totalPrice }}</span>
                                </p>
                            </div>
                            <div class="right">
                                <el-button type="danger" round>去结算</el-button>
                            </div>
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
            },
            changeSelected(id, status) {
                const cart = {
                    id: id,
                    selected: status
                };
                this.$store.commit('updateCartSelected', cart);
            },
            removeCart(id, index) {
                this.cartList.splice(index, 1);
                this.$store.commit('removeCart', id);
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

    .settlement {
        color: red;
        font-weight: bold;
    }
</style>
