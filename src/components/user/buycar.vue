<template>
    <div>
        <div style="width:70%; margin:20px auto 0 auto;">   
            <el-card class="box-card">
                <div class="text item">
                    <span>品牌</span>
                    <el-divider direction="vertical"></el-divider>
                    <el-button class="btn" @click="check('宝马')" type="text">宝马</el-button>
                    <el-button class="btn" @click="check('奔驰')" type="text">奔驰</el-button>
                    <el-button class="btn" @click="check('奥迪')" type="text">奥迪</el-button>
                    <el-button class="btn" @click="check('现代')" type="text">现代</el-button>
                    <el-button class="btn" @click="check('大众')" type="text">大众</el-button>
                    <el-button class="btn" @click="check('丰田')" type="text">丰田</el-button>
                    <el-button class="btn" @click="check('雪佛兰')" type="text">雪佛兰</el-button>
                    <el-button class="btn" @click="check('比亚迪')" type="text">比亚迪</el-button>
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
                <el-col :span="6" v-for="item in items" :key="item.id">
                  <router-link :to="{path: './details', query: {id: item.carId}}" style="text-decoration:none">
                    <el-card :body-style="{ padding: '0px' }" >
                        <img :src="item.face_image" class="image">
                        <div style="padding: 14px;">
                            <span>车系-{{item.brand}}</span> <span>价格-{{item.old_price}}</span>
                        </div>
                    </el-card>
                  </router-link>
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
        activeName: '1',
        items: [
        
        ]
      };
    },
    methods: {
        check(val) {
            var check_params = new URLSearchParams()
            check_params.append('page',1);
            check_params.append('brand',val);
            this.$axios({
                method:'post',
                url:'http://39.108.160.89:8091/es/filtrCar',
                data:check_params
                })
                .then((response) => {
                    console.log(response.data.data)
                    this.items = response.data.data
                })
                .catch(function(error) {
                console.log(error)
            })
        }
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
