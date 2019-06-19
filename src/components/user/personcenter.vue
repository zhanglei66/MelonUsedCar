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
            @click="change_maiche() ; mymaiche()"
          >
            <i class="el-icon-location"></i>
            <span slot="title">我的卖车</span>
          </el-menu-item>

          <el-menu-item
            index="2"
            @click="change_yuyue() ; myyuyue()"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">我的预约</span>
          </el-menu-item>
          <el-menu-item
            index="3"
            @click="change_shoucang() ; myshoucang()"
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
                  :src='site.faceImage'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>{{site.brand}}</span>
                  <div class="bottom clearfix">
                    <p>{{site.oldPrice}}</p>
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
            <el-col :span="12" v-for="ab in abs" :key="ab.id">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  :src='ab.faceImage'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>{{ab.brand}}</span>
                  <div class="bottom clearfix">
                    <p>{{ab.oldPrice}}</p>
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
            <el-col :span="12" v-for="item in items" :key="item.esCar.carId">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
              >
                <img
                  :src='item.esCar.face_image'
                  class="image"
                >
                <div style="padding: 14px;">
                  <span>品牌--{{item.esCar.brand}}</span><span style="margin-left:30px">价格--{{item.esCar.old_price}}</span>
                  <div class="bottom clearfix">
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
        
      ],
      abs:[

      ],
      items: [

      ],
      maiche: true,
      yuyue: false,
      shoucang: false
    };
  },
  created() {
      var params_maiche = new URLSearchParams()
      params_maiche.append('tokenId', localStorage.getItem('tokenId'))
      console.log(localStorage.getItem('tokenId'));
      this.$axios.post('http://39.108.160.89:8091/car/findApplyBYuserId',params_maiche)
        .then((response)=> {
          console.log(response.data.data);
          this.sites = response.data.data;
        })
        .catch(function(error) {
          
        })
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
    mymaiche: function() {
      var params_maiche = new URLSearchParams()
      params_maiche.append('tokenId', localStorage.getItem('tokenId'))
      console.log(localStorage.getItem('tokenId'));
      this.$axios.post('http://39.108.160.89:8091/car/findApplyBYuserId',params_maiche)
        .then((response)=> {
          console.log(response.data.data);
          this.sites = response.data.data;
        })
        .catch(function(error) {
          
        })
    },
    myyuyue: function() {
      var params_yuyue = new URLSearchParams()
      params_yuyue.append('tokenId', localStorage.getItem('tokenId'))
      console.log(localStorage.getItem('tokenId'))
      this.$axios.post('http://39.108.160.89:8091/order/findByUserId',params_yuyue)
        .then((response)=> {
          console.log(response.data.data)
          this.abs = response.data.data
        })
        .catch(function(error) {
          
        })
    },
    myshoucang: function() {
      var params_shoucang = new URLSearchParams()
      params_shoucang.append('tokenId', localStorage.getItem('tokenId'))
      console.log(localStorage.getItem('tokenId'))
      this.$axios.post('http://39.108.160.89:8091/collect/findCollection',params_shoucang)
        .then((response)=> {
          console.log(response.data.data)
          this.items = response.data.data;
        })
        .catch(function(error) {
          
        })
    },
    del_collect(id) {
      var del_shoucang = new URLSearchParams()
      del_shoucang.append('carId', id)
      del_shoucang.append('tokenId', localStorage.getItem('tokenId'))
      console.log(localStorage.getItem('tokenId'))
      this.$axios.post('http://39.108.160.89:8091/collect/deleteCollection',del_shoucang)
        .then((response)=> {
          console.log(response)
        })
        .catch(function(error) {
          
        })
    }
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