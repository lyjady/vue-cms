<template>
    <div>
        <mt-swipe class="swipe" :auto="4000">
            <mt-swipe-item v-for="image in swiperList" :key="image.id">
                <a :href="image.url">
                    <img :src="image.img || image.src" :class="{full: isFull}"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: [
            'swiperList',
            'isFull'
        ]
    }
</script>

<style scoped>
    .swipe {
        height: 200px;
        text-align: center;
    }

    img {
        height: 100%;
        /*width: 100%;*/
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        border: none;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
        img {
            width: 60px;
            height: 60px;
        }
    }

    li a img{
        height: 60px;
        width: 60px;
    }

    .full {
        width: 100%;
    }
</style>
