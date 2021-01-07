<template>

    <div class="entity-box">

        <div class="execute-box">
            <el-button-group>
                <el-button size="mini" type="danger" @click="editDialog=true,formData={}">新建</el-button>
                <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
            </el-button-group>
        </div>

        <div class="search-box">
            <!--搜索表单位置-->
        </div>

        <div class="table-box">
            <el-table
                    ref="dataTable"
                    stripe
                    border
                    tooltip-effect="light"
                    :data="tableData"
                    @selection-change="selectionChangeListenter"
                    style="width: 100%">
                <el-table-column
                        align="center"
                        type="selection"
                        width="55">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierName"
                        show-overflow-tooltip
                        label="运营商名称">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierContact"
                        show-overflow-tooltip
                        label="联系人">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierPhone"
                        show-overflow-tooltip
                        label="联系方式">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierEmail"
                        show-overflow-tooltip
                        label="联系邮箱">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierAddress"
                        show-overflow-tooltip
                        label="联系地址">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierBank"
                        show-overflow-tooltip
                        label="开户行">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="supplierBankAccount"
                        show-overflow-tooltip
                        label="银行卡号">
                </el-table-column>

                <el-table-column
                        align="center"
                        label="操作">
                    <template v-slot="obj">
                        <el-button size="mini" type="primary" @click="editDialog=true,findById(obj.row.id)">编辑</el-button>

                        <el-button size="mini" type="danger" @click="delDialog=true,$refs.dataTable.clearSelection(),ids=[],ids.push(obj.row.id)">删除</el-button>
                    </template>

                </el-table-column>
            </el-table>
        </div>

        <div class="page-box">
            <el-pagination
                    background
                    :current-page=currentPage
                    :page-size=pageSize
                    layout="prev, pager, next"
                    :total=total
                    @current-change="pageChange"
            >
            </el-pagination>
        </div>


        <!--    新建或者编辑弹框-->

        <el-dialog
                title="实体操作"
                :visible.sync="editDialog"
                width="40%">
            <el-form ref="form" label-width="100px" size="small">

                <el-form-item label="运营商名称">
                    <el-input v-model="formData.supplierName" placeholder=""></el-input>
                </el-form-item>

                <el-form-item label="练习人">
                    <el-input v-model="formData.supplierContact"></el-input>
                </el-form-item>
                <el-form-item label="练习方式">
                    <el-input v-model="formData.supplierPhone"></el-input>
                </el-form-item>

                <el-form-item label="公司邮箱">
                    <el-input v-model="formData.supplierEmail"></el-input>
                </el-form-item>

                <el-form-item label="地址">
                    <el-input v-model="formData.supplierAddress"></el-input>
                </el-form-item>

                <el-form-item label="开户行">
                    <el-input v-model="formData.supplierBank"></el-input>
                </el-form-item>

                <el-form-item label="银行卡号">
                    <el-input v-model="formData.supplierBankAccount"></el-input>
                </el-form-item>


            </el-form>

            <!--//editDialog = false,-->
            <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false" size="mini">取 消</el-button>
        <el-button type="success" @click="editDialog = false,addOrEdit()" size="mini">确 定</el-button>
      </span>
        </el-dialog>


        <!--    删除弹框-->

        <el-dialog
                title="温馨提示"
                :visible.sync="delDialog"
                width="30%">
            <span>你确定要删除吗? {{ ids }}</span>
            <!--//editDialog = false,-->
            <span slot="footer" class="dialog-footer">
        <el-button @click="delDialog = false" size="mini">取 消</el-button>
        <el-button type="success" @click="delDialog = false,deleteByIds()" size="mini">确 定</el-button>
      </span>
        </el-dialog>



    </div>

</template>

<script src="./index.js">

</script>

<style lang="less" >
@import "./index";
</style>