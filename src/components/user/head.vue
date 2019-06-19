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
        <el-menu-item v-if="seen" index="/user/login">登陆</el-menu-item>
        <el-menu-item v-if="!seen" index="/user/personcenter"><i class="el-icon-s-home" style="color:white;font-size:30px"></i></el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>

    <div style="width:100%; height:300px; margin-top:100px; background-color:#545c64">
        <div style="margin-left:500px; padding-top:50px;"><h2 style="color:white">Offer二手车</h2></div>
        <div style="margin-left:500px;"><h4 style="color:white">咨询电话：123456789（周一至周日 8:00-21:00）</h4></div>
        <div style="margin-left:500px;"><h4 style="color:white">服务监督热线： 400-066-8780（周一至周日 9:00-21:00）</h4></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      seen:true,
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
