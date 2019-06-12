<template>
  <div style="margin-top:50px; width:800px; margin-left:300px;">
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >

          <el-menu-item
            index="1"
            @click="change_maiche"
          >
            <i class="el-icon-location"></i>
            <span slot="title">我的卖车</span>
          </el-menu-item>

          <el-menu-item
            index="2"
            @click="change_yuyue"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">我的预约</span>
          </el-menu-item>
          <el-menu-item
            index="3"
            @click="change_shoucang"
          >
            <i class="el-icon-document"></i>
            <span slot="title">我的收藏</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col
        :span="18"
        v-if="maiche"
      >
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="12" v-for="site in sites" :key="site.id">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  :src='site.src_img'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>{{site.type}}</span>
                  <div class="bottom clearfix">
                    <p>{{site.price}}</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col
        :span="18"
        v-if="yuyue"
      >
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="12" v-for="site in sites" :key="site.id">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  :src='site.src_img'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>{{site.type}}</span>
                  <div class="bottom clearfix">
                    <p>{{site.price}}</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col
        :span="18"
        v-if="shoucang"
      >
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  src='../../assets/timg.jpg'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>车型</span>
                  <div class="bottom clearfix">
                    <p>price</p>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  src='../../assets/timg.jpg'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>车型</span>
                  <div class="bottom clearfix">
                    <p>price</p>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  src='../../assets/timg.jpg'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>车型</span>
                  <div class="bottom clearfix">
                    <p>price</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {id:1,src_img:require('../../assets/timg.jpg'),type:"宝马",price:100000},
        {id:2,src_img:require('../../assets/timg.jpg'),type:"奔驰",price:200000},
      ],
      maiche: true,
      yuyue: false,
      shoucang: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change_maiche: function() {
      this.maiche = true;
      this.yuyue = false;
      this.shoucang = false;
    },
    change_yuyue: function() {
      this.maiche = false;
      this.yuyue = true;
      this.shoucang = false;
    },
    change_shoucang: function() {
      this.maiche = false;
      this.yuyue = false;
      this.shoucang = true;
    },
    // mymaiche: function() {
    //   this.$axios.get('')
    //     .then(function(response) {
          
    //     })
    //     .catch(function(error) {
          
    //     })
    // },
    // myyuyue: function() {
    //   this.$axios.get('')
    //     .then(function(response) {
          
    //     })
    //     .catch(function(error) {
          
    //     })
    // },
    // myshoucang: function() {
    //   this.$axios.get('')
    //     .then(function(response) {
          
    //     })
    //     .catch(function(error) {
          
    //     })
    // }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  height: 600px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>s