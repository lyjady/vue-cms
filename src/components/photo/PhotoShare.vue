<template>
    <div>
        <van-tabs>
            <van-tab v-for="(item, index) in navigation" :key="index" :title="item.item"/>
        </van-tabs>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js';

    export default {
        data() {
            return {
                navigation: [
                    {item: '全部'},
                    {item: '家居生活'},
                    {item: '摄影设计'},
                    {item: '明星美女'},
                    {item: '娱乐'},
                    {item: '娱乐'},
                    {item: '娱乐'},
                    {item: '娱乐'},
                    {item: '娱乐'}
                ]
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y;
    }
</style>