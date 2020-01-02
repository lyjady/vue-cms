<template>
    <div>
        <mt-swipe class="swipe" :auto="4000">
            <mt-swipe-item v-for="image in carouselList" :key="image.id">
                <a :href="image.url">
                    <img :src="image.img"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <h3>HomeContainer</h3>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        data() {
            return {
                carouselList: null
            }
        },
        methods: {
            getCarousel() {
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(response => {
                    if (response.body.status === 0) {
                        this.carouselList = response.body.message;
                    } else {
                        Toast('轮播图请求失败');
                    }
                })
            }
        },
        created() {
            this.getCarousel();
        }
    }
</script>

<style scoped>
    .swipe {
        height: 200px;
    }

    img {
        height: 100%;
        width: 100%;
    }
</style>