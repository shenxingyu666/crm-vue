<template>

  <div class="entity-box">

    <div class="table-box">
      <router-link to="/main/warehouse">
        <el-button style="margin-left: 30px" size="mini" type="primary" round>返回</el-button>
      </router-link>
      <div class="table-div">
        <span style="color: #409EFF;vertical-align: middle">单号{{order.id}}</span>

        <el-scrollbar style="height: 480px">
        <el-table
          ref="dataTable"
          border
          tooltip-effect="light"
          :data="tableData"
          style="width: 100%;margin-top: 15px">

        <el-table-column
            align="center"
            prop="id"
            label="商品串号"
            width="180">
        </el-table-column>

        <el-table-column
            align="center"
            prop="goodName"
            show-overflow-tooltip
            label="商品名称">
        </el-table-column>

        <el-table-column
            align="center"
            prop="goodModelNum"
            show-overflow-tooltip
            label="商品型号">
        </el-table-column>

        <el-table-column
            align="center"
            prop="goodColor"
            show-overflow-tooltip
            label="商品颜色">
        </el-table-column>

        <el-table-column
            align="center"
            prop="goodDesc"
            show-overflow-tooltip
            label="描述">
        </el-table-column>

        <el-table-column
            align="center"
            prop="statusDesc"
            show-overflow-tooltip
            label="配置">
        </el-table-column>
      </el-table>
        </el-scrollbar>
      <el-form style="margin-top: 15px" :label-position="labelPosition" label-width="80px" :model="order">
        <el-row>
          <el-col :span="8">
            <el-form-item label="返厂地址">
              <el-input v-model="order.factoryAddress"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="返厂原因">
              <el-input v-model="order.fixReason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="备注">
              <el-input v-model="order.otherDesc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      </div>
    </div>

  </div>

</template>

<script src="./index.js">

</script>

<style lang="less">
@import "./index";
</style>