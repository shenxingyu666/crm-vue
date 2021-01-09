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
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo">
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>B2C销售订单管理</span>
                            </template>
                            <el-menu-item index="3">
                                <i class="el-icon-menu"></i>
                                <span slot="title">系统B2C销售订单接收</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-menu"></i>
                                <span slot="title">网店订单导入</span>
                            </el-menu-item>
                            <el-menu-item index="5">
                                <i class="el-icon-menu"></i>
                                <span slot="title">生成销售出库单</span>
                            </el-menu-item>
                            <el-menu-item index="6">
                                <i class="el-icon-menu"></i>
                                <span slot="title">销售退货单生成</span>
                            </el-menu-item>
                        </el-submenu>
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