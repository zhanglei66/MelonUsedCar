<template>
  <div>
    <div style="width:80%; margin:20px auto 0 auto">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="site in sites" :key="site.src_img">
          <img :src="site.src_img" style="width:100%;" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div style="width:1300px; height:200px; margin: 0 auto;">
      <el-card class="box-card" style="height:100%">
        <h2>Offer二手车</h2>
        <h3>致力于打造安全、可靠、服务一流的二手车交易市场</h3>
      </el-card>
    </div>
    <div style="width:1150px; margin:0 auto">
      <div>
        <h2>精选推荐</h2>
      </div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in items" :key="item.id">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img :src='item.face_image' class="image">
            <div style="padding: 14px;">
              车系：<span>{{item.brand}}</span>
              报价：<span>{{item.old_price}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="20">
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src='../../assets/timg.jpg' class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src='../../assets/timg.jpg' class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src='../../assets/timg.jpg' class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src='../../assets/timg.jpg' class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
window.mark = 0;
export default {
  data() {
    return {
      sites: [
        {src_img:require('../../assets/timg.jpg')},
        {src_img:require('../../assets/car2.jpg')},
        {src_img:require('../../assets/car3.jpg')},
        {src_img:require('../../assets/car4.jpg')},
        {src_img:require('../../assets/car5.jpg')},
      ],
      items: [
        {id:1,src_img:require('../../assets/timg.jpg'),type:"宝马",price:100000},
        {id:2,src_img:require('../../assets/timg.jpg'),type:"奔驰",price:200000},
        {id:3,src_img:require('../../assets/timg.jpg'),type:"奥迪",price:300000},
        {id:4,src_img:require('../../assets/timg.jpg'),type:"奥托",price:50000},
        {id:5,src_img:require('../../assets/timg.jpg'),type:"宝马",price:100000},
        {id:6,src_img:require('../../assets/timg.jpg'),type:"奔驰",price:200000},
        {id:7,src_img:require('../../assets/timg.jpg'),type:"奥迪",price:300000},
        {id:8,src_img:require('../../assets/timg.jpg'),type:"奥托",price:50000},
      ],
      currentDate: new Date()
    };
  },
  created () {
        var buycar_params = new URLSearchParams()
        buycar_params.append('page',1);
        this.$axios({
          method:'post',
          url:'http://39.108.160.89:8091/es/filtrCar',
          data:buycar_params
       })
        .then((response) => {
          console.log(response.data.data)
          this.items = response.data.data
        })
        .catch(function(error) {
          console.log(error)
        })
    }
}
</script>


<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
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
      clear: both
  }
</style>