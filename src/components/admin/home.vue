<template>
  <div>
    <el-row>
      <el-col :span="12" style="padding:0 10px;">
        <el-card :body-style="{ padding: '10px' }" header="审核中心">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-button type="primary" class="button">转到审核中心</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" style="padding:0 10px;">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" header="数据中心">
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
    <div>人员中心</div>

  </div>
</template>
<script>
import {homeOption} from '../../../static/getData/option'
export default {
  name: 'admin',
  data () {
    return {
      admin: 'admin',
    }
  },
  mounted(){
    let dataChart = this.$echarts.init(document.getElementById('dataChart'))
    dataChart.setOption(homeOption)
  }
}
</script>

<style lang="stylus" scoped>

</style>
