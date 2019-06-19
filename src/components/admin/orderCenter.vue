<template>
  <div>
    <div id="orderChart" :style="{height: '400px'}" ></div>
    <el-table
      :data="tableData"
      border
      empty-text="-"
      style="text-align:center;width: 90%; margin:10px auto;left:0;right:0;">
      <el-table-column label="买家信息">
        <el-table-column
        prop="order.phone"
        label="电话号码"
        min-width="110"
        >
        </el-table-column>
        <el-table-column
        prop="order.createdAt"
        label="创建时间"
        min-width="155"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column label="卖家信息">
        <el-table-column
        prop="esu.name"
        label="姓名"
        min-width="60"
        >
        </el-table-column>
        <el-table-column
        prop="esu.age"
        label="年龄"
        min-width="60"
        >
        </el-table-column>
        <el-table-column
        prop="esu.idCard"
        label="身份证"
        min-width="150"
        >
        </el-table-column>
        <el-table-column
        prop="esu.area"
        label="地点"
        min-width="60"
        >
        </el-table-column>
        <el-table-column
        prop="esu.profession"
        label="职业"
        min-width="60"
        >
        </el-table-column>
        <el-table-column
        prop="esu.email"
        label="邮箱"
        min-width="150"
        >
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="状态"
        min-width="75">
          <template slot-scope="props">
            <el-tag type="success" v-if="props.row.order.status === 1">已处理</el-tag>
            <el-tag type="info" v-if="props.row.order.status === 0" @click="handleClick(props.row.order.id)" style="cursor:pointer;">未处理</el-tag>
            <el-tag type="warning" v-if="props.row.order.status === 3">已取消</el-tag>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  getOrderCenterOption
} from '../../../static/getData/option'
import axios from '../../assets/Axios'
export default {
  data () {
    return {
      tableData:[{
        order: {
          id: 2,
          createdAt: '2019-06-12 05:08:03',
          status: 0,
          phone: '15691766831'
        },
        esu: {
          name: 'zlw',
          age: '12',
          idCard: '111111111111111111', 
          area: '深圳',
          number: '15691766831',
          profession: '其他',
          email: '12312312@qq.com'
        }
      }]
    }
  },
  methods : {
    async handleClick (id) {
      let data = (await (axios('/order/applyOrder',{
        params: {
          id: 2
        }
      }))).data
      if (data.status === 200) {
        this.$notify({
          title: '提示',
          message: '修改成功',
          type: 'success'
        });
      } else {
        this.$notify({
          title: '提示',
          message: '修改失败',
          type: 'warning'
        });
      }
    }
  },
  async mounted () {
    let orderObj = {}, orderArr = []
    // this.tableData = (await axios('/order/findByStatus', {
    //   params: {
    //     status: 4
    //   }
    // })).data.data
    this.tableData.forEach((value) => {
      if (orderObj[value.esu.area]) {
        orderObj[value.esu.area] ++
      } else {
        orderObj[value.esu.area] = 1
      }
    })
    orderArr = Object.keys(orderObj).map((value)=>{
      return {name: value, value: orderObj[value]} 
    })
    let orderChart = this.$echarts.init(document.getElementById('orderChart'))
    orderChart.setOption(getOrderCenterOption(orderArr))
  }
}
</script>

<style lang="stylus" scoped>

</style>
