<template>

  <div class="entity-box">

    <div class="execute-box">
      <el-button-group>
        <el-button size="mini" icon="el-icon-edit" type="primary" @click="formData={},toAdd()">新 建</el-button>
        <el-button size="mini" icon="el-icon-delete" type="danger" @click="delDialog=true">删 除</el-button>
        <el-button size="mini" icon="el-icon-search" type="success" @click="findAll">搜 索</el-button>
        <el-button size="mini" icon="el-icon-message" type="warning">导 出</el-button>
      </el-button-group>
    </div>

    <div class="search-box" style="margin-top: 20px">
      <!--搜索表单位置-->
      <el-form size="mini" :model="searchPage" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-form-item label="返厂出库单号">
              <el-input v-model="searchPage.orderId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="返厂出库标志">
              <el-input v-model="searchPage.ioStatus"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="审核状态">
              <el-input v-model="searchPage.approvalStatus"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="制单人">
              <el-input v-model="searchPage.creatorId"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="4">
            <el-form-item label="制单时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="addTime1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4" :pull="1">
            <el-form-item label="至">
              <el-date-picker type="date" placeholder="选择日期" v-model="addTime2" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="审批时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="approvalTime1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="4" :pull="1">
            <el-form-item label="至">
              <el-date-picker type="date" placeholder="选择日期" v-model="approvalTime2" style="width: 100%;"></el-date-picker>
            </el-form-item>
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
            label="返厂出库单号"
            width="180">
        </el-table-column>

        <el-table-column
            align="center"
            prop="ioStatus"
            show-overflow-tooltip
            label="返厂出库标志">
        </el-table-column>

        <el-table-column
            align="center"
            prop="creatorId"
            show-overflow-tooltip
            label="制单人">
        </el-table-column>

        <el-table-column
            align="center"
            prop="addTime"
            show-overflow-tooltip
            label="制单时间">
        </el-table-column>

        <el-table-column
            align="center"
            prop="approvalName"
            show-overflow-tooltip
            label="审批人">
        </el-table-column>

        <el-table-column
            align="center"
            prop="approvalStatus"
            show-overflow-tooltip
            label="审批状态">
        </el-table-column>

        <el-table-column
            align="center"
            prop="updateTime"
            show-overflow-tooltip
            label="修改时间">
        </el-table-column>


        <el-table-column
            align="center"
            label="操作"
            width="300">
          <template v-slot="obj">
            <el-button size="mini" type="primary" @click="findById(obj.row.id)">查看</el-button>

            <el-button size="mini" type="danger" @click="updateById(obj.row)">修改
            </el-button>
            <el-button size="mini" type="success">审核跟踪</el-button>
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

<style lang="less">
@import "./index";
</style>