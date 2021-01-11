<template>
    <div class="entity-box">
        <div class="execute-box">
            <el-button-group>
                <!--<el-button size="mini" type="danger">新建</el-button>-->
                <!--<el-button size="mini" type="danger">删除</el-button>-->
            </el-button-group>
        </div>
        <div class="search-box">
            <el-form ref="form" :model="form" label-width="80px" size="mini">
                <el-row>
                    <el-col :span="5">
                        <el-form-item label="订单编号">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="订单类型">
                            <el-select v-model="form.orderTypeId" placeholder="请选择">
                                <el-option label="请选择" value=""></el-option>
                                <el-option  v-for="item in form.formData" :key="item.orderTypeId" :label="item.orderTypeName" :value="item.orderTypeId"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="支付方式">
                            <el-select v-model="form.orderPayId" placeholder="请选择" @change="OrderPay">
                                <el-option label="请选择" value=""></el-option>
                                <el-option v-for="item in form.formData" :key="item.orderPayId" :label="item.orderPayName" :value="item.orderPayId"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="搜索查询">
                            <el-input v-model="form.search"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <!--style="margin-left: 100px"-->

                            <el-button size="mini" type="danger" v-model="form" @click="search">搜索</el-button>
                            <el-button size="mini" type="danger" @click="dialog=true,Sales()">生成销售出库单</el-button>

                    </el-col>
                </el-row>
            </el-form>


        </div>

        <div class="table-box">
            <el-table
                    @selection-change="selectionList"
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="id"
                        label="订单编号">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="orderTypeName"
                        label="订单类型">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="orderMotion"
                        label="订单动作">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="businessType"
                        label="业务类型">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="orderMode"
                        label="配送方式">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="orderPayName"
                        label="支付方式">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="orderStateName"
                        label="订单状态">
                </el-table-column>
                <el-table-column
                        align="center"
                        label="操作">
                    <template v-slot="obj">
                        <el-button size="mini" type="primary" @click="dialogTableVisible=true ,query(obj.row.id)" >查看</el-button>
                        <el-button size="mini" type="danger" @click="dialogVisible=true">删除</el-button>
                        <!--<el-button size="mini" type="primary" @click="dialogTableVisibles=true ,findQuery(obj.row.id)" >查看</el-button>-->
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <div class="page-box">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="pages"
                    :current-page="currentPage"
                    :page-size="pageSize"
                    :total="total">
            </el-pagination>
        </div>
        <div class="order-box">
            <el-dialog
                    title="温馨提示"
                    :visible.sync="dialogVisible"
                    width="30%">
                    <!--:before-close="handleClose">-->
                <span>你确定要删除吗{{ids}}</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false,deleteById(ids)" size="mini">确 定</el-button>
  </span>
            </el-dialog>
            <el-dialog title="订单出库单" :visible.sync="dialog">
                <el-table :data="grid">
                    <el-table-column property="id" label="商品编号" ></el-table-column>
                    <el-table-column property="goodName" label="商品名称" ></el-table-column>
                    <el-table-column property="goodPrice" label="单价"></el-table-column>
                    <el-table-column property="goodNumber" label="数量"></el-table-column>
                    <el-table-column property="goodMoney" label="总金额"></el-table-column>
                    <el-table-column property="consigneeName" label="收货人姓名" ></el-table-column>
                    <el-table-column property="consigneePhone" label="联系电话" ></el-table-column>
                    <el-table-column property="consigneeSite" label="收货人地址"></el-table-column>
                    <el-table-column property="consigneeRemarks" label="备注"></el-table-column>
                </el-table>
            </el-dialog>

            <el-dialog title="商品详细信息" :visible.sync="dialogTableVisible">
                <el-table :data="gridData">
                    <el-table-column property="id" label="商品编号" ></el-table-column>
                    <el-table-column property="goodName" label="商品名称" ></el-table-column>
                    <el-table-column property="goodPrice" label="单价"></el-table-column>
                    <el-table-column property="goodNumber" label="数量"></el-table-column>
                    <el-table-column property="goodMoney" label="总金额"></el-table-column>
                </el-table>
            </el-dialog>
            <el-dialog title="收货人信息" :visible.sync="dialogTableVisibles">
                <el-table :data="gridDatas">
                    <el-table-column property="consigneeName" label="收货人姓名" ></el-table-column>
                    <el-table-column property="consigneePhone" label="联系电话" ></el-table-column>
                    <el-table-column property="consigneeSite" label="收货人地址"></el-table-column>
                    <el-table-column property="consigneeRemarks" label="备注"></el-table-column>
                </el-table>
            </el-dialog>
        </div>
    </div>
</template>

<script src="./index.js"></script>


<style lang="less" src="./index.less"></style>