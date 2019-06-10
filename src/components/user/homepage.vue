<template>
  <div>
    <div style="width:80%; margin: 0 auto">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in 5" :key="item">
          <img src="../../assets/timg.jpg" style="width:100%;" alt="">
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
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>上牌时间</p>
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../../assets/timg.jpg" class="image">
            <div style="padding: 14px;">
              <span>车型</span>
              <div class="bottom clearfix">
                <p>price</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
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