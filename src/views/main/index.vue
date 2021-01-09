<template>


    <div class="main-box">
        <el-container>
            <el-aside width="200px">
                <div class="tittle-wrapper">
                    <img src="../../assets/heiyanquan.jpg" alt="">
                    <span>不睡觉管理系统</span>
                </div>

                <el-scrollbar>
                <el-menu
                        :default-active="this.$router.path" router
                        class="el-menu-vertical-demo">

                    <el-menu-item index="main">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统首页</span>
                    </el-menu-item>

                    <el-submenu index="main">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品相关</span>
                        </template>

                        <el-menu-item index="brand">
                            <i class="el-icon-menu"></i>
                            <span slot="title">品牌管理</span>
                        </el-menu-item>

                        <el-menu-item index="category">
                            <i class="el-icon-menu"></i>
                            <span slot="title">分类管理</span>
                        </el-menu-item>

                        <el-menu-item index="good">
                            <i class="el-icon-menu"></i>
                            <span slot="title">商品管理</span>
                        </el-menu-item>

                    </el-submenu>


                    <el-menu-item index="supplier">
                        <i class="el-icon-menu"></i>
                        <span slot="title">运营商管理</span>
                    </el-menu-item>

                </el-menu>
                </el-scrollbar>
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>

                    <div class="main-body">

                    <router-view/>
                    </div>

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<!--<script src="./index.js">-->
<!--</script>-->



<style lang="less" src="./index.less">


</style>