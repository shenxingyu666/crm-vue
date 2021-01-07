<template>


    <div class="main-box">
        <el-container>
            <el-aside width="200px">
                <div class="tittle-wrapper">
                    <img src="../../assets/heiyanquan.jpg" alt="">
                    <span>不睡觉管理系统</span>
                </div>

                <!--<el-scrollbar class="scrollbar">-->
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo">

                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">系统首页</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品相关</span>
                        </template>

                        <el-menu-item index="2-1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">品牌管理</span>
                        </el-menu-item>

                        <el-menu-item index="2-2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">分类管理</span>
                        </el-menu-item>

                        <el-menu-item index="2-3">
                            <i class="el-icon-menu"></i>
                            <span slot="title">商品管理</span>
                        </el-menu-item>

                    </el-submenu>

                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">运营商管理</span>
                    </el-menu-item>

                </el-menu>
                <!--</el-scrollbar>-->
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped lang="less">
    .main-box {
        height: 100%;
    }
    .el-header {
        background-color: #F56C6C;
        color: #fff;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #fff;
        color: #444;
    }

    .tittle-wrapper{
        line-height: 60px;
        background-color: #F56C6C;
    }

    .tittle-wrapper img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align: middle;
        margin: 0 8px 0px 10px;
    }

    .tittle-wrapper span{
        font-weight: 700;
        color: white;
        font-size: 18px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    .el-container {
        height: 100%;
    }

    /*.scrollbar{*/
        /*height: calc(100% - 60px);*/
    /*}*/

</style>