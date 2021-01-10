<template>

    <div class="entity-box">


        <div class="title-box" style="margin: 0 0 20px 20px" >
            <h1 style="font-size: 30px;font-weight: 700;font-family: 楷体;color: deeppink">赠品管理</h1>
        </div>


        <div class="execute-box">
            <el-button-group>
                <el-button size="mini" type="danger" @click="editDialog=true,formData={}">新建</el-button>
                <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
            </el-button-group>
        </div>

        <div class="search-box" style="margin-top: 20px">
            <!--搜索表单位置-->

            <el-form size="mini" :model="searchPage" label-width="100px">

                <el-row :gutter="20">

                    <el-col :span="4">
                        <el-form-item label="商品名称">
                            <el-input v-model="searchPage.freebieName"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item label="商品型号">
                            <el-input v-model="searchPage.freebieModelNum"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item label="商品品牌">
                            <el-select v-model="searchPage.freebieBrandId">
                                <el-option v-for="(item,index) in brandForm" :key="index"  :label="item.brandName" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-form-item label="商品分类">
                            <el-select v-model="searchPage.freebieCategoryId">
                                <el-option v-for="(item,index) in categoryForm" :key="index"  :label="item.categoryName" :value="item.id"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="4">
                        <el-button size="mini" type="danger" @click="findAll">查询</el-button>
                    </el-col>



                </el-row>


            </el-form>

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
                        label="id">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieName"
                        show-overflow-tooltip
                        label="赠品名称">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieCategoryId"
                        show-overflow-tooltip
                        label="赠品分类id">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieBrandId"
                        show-overflow-tooltip
                        label="赠品品牌id">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieModelNum"
                        show-overflow-tooltip
                        label="赠品型号">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieSupplierId"
                        show-overflow-tooltip
                        label="赠品商id">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieDesc"
                        show-overflow-tooltip
                        label="赠品描述">
                </el-table-column>


                <el-table-column
                        align="center"
                        prop="freebieColor"
                        show-overflow-tooltip
                        label="赠品颜色">
                </el-table-column>


                <el-table-column
                        align="center"
                        prop="freebiePrice"
                        show-overflow-tooltip
                        label="赠品价格">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="freebieNum"
                        show-overflow-tooltip
                        label="赠品库存">
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

                <el-form-item label="赠品名称">
                    <el-input v-model="formData.freebieName" placeholder=""></el-input>
                </el-form-item>

                <el-form-item label="分类">
                    <el-select v-model="formData.freebieCategoryId">
                        <el-option v-for="(item,index) in categoryForm" :key="index"  :label="item.categoryName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="品牌">
                    <el-select v-model="formData.freebieBrandId">
                        <el-option v-for="(item,index) in brandForm" :key="index"  :label="item.brandName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="赠品型号">
                    <el-input v-model="formData.freebieModelNum"></el-input>
                </el-form-item>

                <el-form-item label="运营商">
                    <el-select v-model="formData.freebieSupplierId">
                        <el-option v-for="(item,index) in supplierForm" :key="index"  :label="item.supplierName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="赠品描述">
                    <el-input v-model="formData.freebieDesc"></el-input>
                </el-form-item>

                <el-form-item label="赠品颜色">
                    <el-input v-model="formData.freebieColor"></el-input>
                </el-form-item>

                <el-form-item label="赠品价格">
                    <el-input v-model="formData.freebiePrice"></el-input>
                </el-form-item>

                <el-form-item label="赠品库存">
                    <el-input v-model="formData.freebieNum"></el-input>
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