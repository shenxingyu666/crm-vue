<template>

  <div class="entity-box">

    <div class="execute-box">
      <el-button-group>
        <el-button size="mini" icon="el-icon-edit" type="primary" @click="toAdd('未审核')">未审核</el-button>
        <el-button size="mini" icon="el-icon-check" type="danger" @click="toAdd('审核不通过')">审核未通过</el-button>
        <el-button size="mini" icon="el-icon-check" type="success" @click="toAdd('已审核')">已审核</el-button>
        <el-link style="margin-left: 15px" size="mini" icon="el-icon-download" type="warning"
         href="http://localhost:9000/aftersale/export">导 出</el-link>
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
          <el-col :span="4" :pull="1">
          <el-button size="mini" icon="el-icon-search" type="success" @click="findAll">搜 索</el-button>
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
          style="width: 100%">

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
            <el-button size="mini" type="primary" @click="findById(obj.row)">审核</el-button>
            <el-button size="mini" type="success" @click="insurance(obj.row.id)">审核跟踪</el-button>
          </template>

        </el-table-column>
      </el-table>
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
    </div>


  </div>

</template>

<script src="./index.js">

</script>

<style lang="less">
@import "./index";
</style>