<template>
  <div>
    <canvas id="canvas"></canvas>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">数据中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
import drawCanvas from '@/assets/drawcanvas'
export default {
  name: 'adminHead',
  data () {
    return {
        activeIndex: '1',
    }
  },
  mounted () {
    drawCanvas()
  }
}
</script>

<style lang="stylus">
#canvas
  bottom 0
  left 0
  right 0
  margin auto
  position fixed
  z-index -1
</style>
