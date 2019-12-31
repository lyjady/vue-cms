<template>
    <div class="app-container">
        <!-- header -->
        <mt-header fixed title="叽霸商城">叽霸商城</mt-header>

        <!-- content -->
        <h1>这是主页</h1>

        <!-- tabbar -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
    .app-container {
        padding-top: 40px;
    }
</style>