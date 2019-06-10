<template>
    <div>
        <div style="width:70%; margin:20px auto 0 auto;">   
            <el-card class="box-card">
                <div class="text item">
                    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                    <span>品牌</span>
                    <el-divider direction="vertical"></el-divider>
                    <el-button class="btn" type="text">宝马</el-button>
                    <el-button class="btn" type="text">奔驰</el-button>
                    <el-button class="btn" type="text">奥迪</el-button>
                    <el-button class="btn" type="text">奥拓</el-button>
                    <el-button class="btn" type="text">现代</el-button>
                    <el-divider class="line"></el-divider>
                </div>
                <div class="text item">
                    <span>车系</span>
                    <el-divider direction="vertical"></el-divider>
                    <el-divider class="line"></el-divider>
                </div>
                <div class="text item">
                    <span>价格</span>
                    <el-divider direction="vertical"></el-divider>
                    <el-button class="btn" type="text">3万以下</el-button>
                    <el-button class="btn" type="text">3-5万</el-button>
                    <el-button class="btn" type="text">5-7万</el-button>
                    <el-button class="btn" type="text">7-9万</el-button>
                    <el-button class="btn" type="text">9-12万</el-button>
                    <el-button class="btn" type="text">12-16万</el-button>
                    <el-button class="btn" type="text">16-20万</el-button>
                    <el-button class="btn" type="text">20万以上</el-button>
                </div>
            </el-card>
        </div>
        <div style="width:70%; margin:0 auto">
            <div>
                <h2>全部</h2>
            </div>
            <el-row :gutter="20">
                <el-col :span="6">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/timg.jpg" class="image">
                    <div style="padding: 14px;">
                    <span>车型</span>
                    <div class="bottom clearfix">
                        <p>上牌时间</p>
                        <p>价格</p>
                        
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
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
                        <p>上牌时间</p>
                        <p>价格</p>
                    </div>
                    </div>
                </el-card>
                </el-col>
            </el-row>
        </div>
        <div id="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size="12"
            :total="30"
            :hide-on-single-page="true">
          </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: '1'
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .box-card {
    width: 100%;
  }

  .line {
      width:100%
  }
  .btn {
      height: 10px;
      margin-left: 30px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  #page {
    margin:20px auto 0 auto;
    width: 200px;
    left: 50%;
    margin-left:-100px;
    position:absolute;
  }
</style>
