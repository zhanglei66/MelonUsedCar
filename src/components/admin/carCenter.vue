<template>
  <div>
    <el-row>
      <el-col :span='4' style="padding:10px;" v-for="(value, index) in carList" :key="index">
        <el-card>
          <el-image :src="value.face_image" fit="cover" style="width:100%;height:130px">
            <div slot="error" class="image-slot">
              <el-image src="https://www1.pcauto.com.cn/2010/price/img/slt/180x135.jpg" fit="cover" style="width:100%;"/>
            </div>
          </el-image>
          <div>
            <span>车名：{{value.brand}}</span>
            <el-button v-if="value.status">下架</el-button> 
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carList:[
        
      ]
    }
  },
  created(){
    this.$axios.get('http://39.108.160.89:8091/es/filtrCar?page=1')
    .then((res) => {
      this.carList = res.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>