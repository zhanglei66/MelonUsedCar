<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/admin/home">首页</el-menu-item>
      <el-menu-item index="/admin/reviewCenter">审核中心</el-menu-item>
      <el-menu-item index="/admin/dataCenter">数据中心</el-menu-item>
      <el-menu-item index="/admin/carCenter">车库中心</el-menu-item>
      <el-menu-item index="/admin/orderCenter">订单中心</el-menu-item>
      <el-menu-item style="float:right">退出登录</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'adminHead',
  data () {
    return {
      activeIndex: '/admin/home',
    }
  },
  mounted () {

  },
  methods:{
    
  }
}
</script>

<style lang="stylus">
</style>
