<template>
  <div>
    <el-row>
      <el-col :span="16" style="padding:0 10px;">
        <div id="pointChart" style="height:500px;"></div>
      </el-col>
      <el-col :span="8" style="padding:0 10px;">
        <div id="verticalChart" style="height:500px;"></div>
      </el-col>
    </el-row>
    
    <el-row ref="elRow">
      <el-col style="padding:10px;" :span="4" v-for="(value, index) in usedCarList" :key="index">
        <el-card>
          <el-image :src="value.src" fit="cover" style="width:100%;"/>
          <div>
            <p>车名：{{value.name}}</p>
            <p>热度：{{value.value}}</p>
            <p>价格：{{value.price.length === 2 ?  value.price[0] + `-${value.price[1]}万元`: '停售'}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {usedCarRank, pointOption, verticalOption} from '../../../static/getData/option'
export default {
  data () {
    return {
      usedCarRank, 
      count: 30,  
      usedCarList: usedCarRank.slice(0, 18),
    }
  },
  mounted () {
    let pointChart = this.$echarts.init(document.getElementById('pointChart'))
    pointChart.setOption(pointOption)
    let verticalChart = this.$echarts.init(document.getElementById('verticalChart'))
    verticalChart.setOption(verticalOption)
    window.onscroll = (e) => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (document.body.clientHeight < scrollTop + window.screen.height) {
        this.count += 30
        this.usedCarList = usedCarRank.slice(0, this.count)
      }
    }
   },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
p
  margin 0
  padding 0
</style>