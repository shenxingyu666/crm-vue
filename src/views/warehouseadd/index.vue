<template>

  <div class="entity-box">

    <div class="table-box">

      <router-link to="/main/warehouse">
        <el-button style="margin-left: 30px" size="mini" type="primary" round>返回</el-button>
      </router-link>
      <el-button style="margin-left: 10px" size="mini" type="success" round
      @click="dialogVisible=true;form={}">选择商品</el-button>

        <div class="table-div">
          <el-row>
            <el-col :span="24" >
              <el-scrollbar style="height: 500px">
                <el-table
                    ref="dataTable"
                    border
                    tooltip-effect="light"
                    :data="tableData"
                    style="width: 100%;margin-top: 15px">

                  <el-table-column
                      align="center"
                      prop="id"
                      show-overflow-tooltip
                      label="商品名称">
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
                      label="串号">
                    <template v-slot="obj">
                      <el-input type="text" :value="goodUid[obj.$index]"/>
                    </template>
                  </el-table-column>

                  <el-table-column
                      align="center"
                      label="操作"
                      width="100">
                    <template v-slot="obj">

                      <el-button size="mini" type="danger" @click="deleteGood(obj.$index)">删除
                      </el-button>

                    </template>

                  </el-table-column>
                </el-table>
              </el-scrollbar>

            </el-col>

          </el-row>

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
              <el-col :span="8" style="margin-left: 20px">
                <el-button type="primary" @click="open">保存</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>


    </div>
    <div class="dialog-box">
      <el-dialog
          title="选择商品"
          :visible.sync="dialogVisible"
          width="30%"
          >
        <el-form size="mini" :model="form">
          <el-form-item label="商品串号" >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="商品名称" >
            <el-select v-model="form.goodId" placeholder="请选择商品名称">
              <p v-for="(i,index) in options" :key="index">
                <el-option :label="i.goodName" :value="i.id"></el-option>
              </p>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="dialogVisible = false;addGood()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script src="./index.js">

</script>

<style lang="less">
@import "./index";
</style>