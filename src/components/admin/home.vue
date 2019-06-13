<template>
  <div>
    <el-row>
      <el-col :span="12" style="padding:10px 0 0 10px;">
        <el-card :body-style="{ padding: '10px' }" shadow="hover" header="审核中心">
        <div id="reviewChart" class="image" style="height:400px"/>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
                <router-link :to="{path:'/admin/reviewCenter', query:{status: 0}}">
                  <el-button type="danger" class="button">转到未审核</el-button>
                </router-link>
              <router-link :to="{path:'/admin/reviewCenter', query:{status: 1}}">
                <el-button type="success" class="button">转到已审核</el-button>
              </router-link>
              <router-link :to="{path:'/admin/reviewCenter', query:{status: 3}}">
                <el-button type="info" class="button">转到已取消</el-button>
              </router-link>
              <router-link :to="{path:'/admin/reviewCenter'}">
                <el-button type="primary" class="button">转到审核中心</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding:10px 0 0 10px;">
        <el-card :body-style="{ padding: '10px' }" shadow="hover" header="数据中心">
          <div id="dataChart" class="image" style="height:400px"></div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <router-link to="/admin/dataCenter">
                <el-button type="primary" class="button">转到数据中心</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" style="padding:10px 0 0 10px;">
        <el-card :body-style="{ padding: '10px' }" shadow="hover" header="车库中心">
          <div id="carChart" class="image" style="height:400px"></div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <router-link to="/admin/carCenter">
                <el-button type="primary" class="button">转到车库中心</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding:10px 0 0 10px;">
        <el-card :body-style="{ padding: '10px' }" shadow="hover" header="订单中心">
          <div id="orderChart" class="image" style="height:400px"></div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <router-link to="/admin/orderCenter">
                <el-button type="primary" class="button">转到订单中心</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {
  homeOption, 
  getReviewOption,
  getOrderOption,
  getCarOption
  } from '../../../static/getData/option'
import axios from '../../assets/Axios'
export default {
  name: 'adminHome',
  data () {
    return {
      admin: 'admin',
      reviewData: [
        {
          status: 0,
        },
        {
          status: 1,
        },
        {
          status: 3,
        }
      ],
      reviewArr:[
        0,
        0,
        0,
        0
      ],
      orderData:[{
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
      }],
    }
  },
  async mounted(){
    console.log(this.reviewArr)
    this.orderData = (await axios('/order/findByStatus', {
      params: {
        status: 4
      }
    })).data.data
    this.reviewData = (await axios('/admin/findByStatus', {
      params: {
        status: 4
      }
    })).data.data
    let dataChart = this.$echarts.init(document.getElementById('dataChart'))
    dataChart.setOption(homeOption)
    this.reviewData.forEach((value) => {
      if (value.status === 0) {
        this.reviewArr[0] ++
      } else if (value.status === 1) {
        this.reviewArr[1] ++
      } else if (value.status === 3) {
        this.reviewArr[2] ++
      }
      this.reviewArr[3] ++
    })
    let reviewChart = this.$echarts.init(document.getElementById('reviewChart'))
    reviewChart.setOption(getReviewOption(this.reviewArr))
    let orderChart = this.$echarts.init(document.getElementById('orderChart'))
    orderChart.setOption(getOrderOption(this.orderData))
    let carChart = this.$echarts.init(document.getElementById('carChart'))
    carChart.setOption(getCarOption([10,20,11]))
  }
}
</script>

<style lang="stylus" scoped>

</style>
