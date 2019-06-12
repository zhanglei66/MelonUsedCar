<template>
  <div>
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      > 
        <el-menu-item index="/user/homepage" id="item_first">首页</el-menu-item>
        <el-menu-item index="/user/buycar">我要买车</el-menu-item>
        <el-menu-item index="/user/sellcarform">我要卖车</el-menu-item>
        <el-menu-item index="/user/login">登陆</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>

    <div style="width:100%; height:300px; margin-top:100px; background-color:#545c64">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
  #item_first {
    margin-left: 40%;
  }
  
</style>
