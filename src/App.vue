<template>
    <div class="app-container">
        <!-- header -->
        <mt-header fixed title="秀清大猪猪">
            <router-link to="" slot="left" v-show="isShow">
                <mt-button icon="back" @click="back">返回</mt-button>
            </router-link>
        </mt-header>

        <!-- content -->
        <transition>
            <router-view></router-view>
        </transition>

        <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-lib" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span id="cart" class="mui-badge">{{ $store.getters.getGoodsCount }}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-lib" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        },
        watch: {
            '$route.path': function (newValue) {
                if (newValue !== '/home') {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            }
        }
    }
</script>

<style scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 60px;
        overflow-x: hidden;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.5s ease;
    }

    .mui-bar-tab .mui-tab-item-lib.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item-lib {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-lib .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    /*#26a2ff*/

    .mui-bar-tab .mui-tab-item-lib .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }


</style>
