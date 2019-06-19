<template>
  <div>
    <div style="width:1000px; margin: 20px auto 0 auto;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div style="width:460px; margin:0 auto 0 auto;">
            <el-form
              ref="form"
              label-width="80px"
            >
              <el-form-item label="车牌">  
                <el-input v-model="carnum" placeholder="车牌"></el-input>
              </el-form-item>
              <el-form-item label="车型">
                <el-row>
                  <el-col :span="24">
                    <el-input v-model="carmodel"></el-input>
                    <!-- <el-select
                      v-model="form.carmodel1"
                      placeholder="品牌"
                    >
                      <el-option
                        label="宝马"
                        value="宝马"
                      ></el-option>
                      <el-option
                        label="奔驰"
                        value="奔驰"
                      ></el-option>
                      <el-option
                        label="奥迪"
                        value="奥迪"
                      ></el-option>
                      <el-option
                        label="现代"
                        value="现代"
                      ></el-option>
                    </el-select> -->
                  </el-col>
                  
                </el-row>
              </el-form-item>
              <el-form-item label="上牌时间">
                <!-- <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="cardate"
                  style="width: 100%;"
                ></el-date-picker> -->
                <el-input v-model="cardate"></el-input>
              </el-form-item>
              <el-form-item label="行驶里程">
                <el-input v-model="cardistance"></el-input>
              </el-form-item>
              <el-form-item label="排量">
                <el-input v-model="cardisplacement"></el-input>
              </el-form-item>
              <el-form-item label="二手价">
                <el-input v-model="carprice"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="telphone"></el-input>
              </el-form-item>
            </el-form>
            <!-- <div style="text-align:center">
                  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
                </div> -->
          </div>
        </el-col>
        <el-col :span="12">
          <div style="width:560px; margin:0 auto;">
            <el-form
              ref="form"
              label-width="80px"
            >
              <el-form-item label="验车时间">
                <el-radio-group v-model="appointment_time">
                  <el-radio-button
                    class="radio_btn"
                    label="今天上午9：00-12:00"
                  >今天上午9：00-12:00</el-radio-button>
                  <el-radio-button
                    class="radio_btn radio_btn_1"
                    label="今天下午12:00-18:00"
                  >今天下午12:00-18:00</el-radio-button>
                  <el-radio-button
                    class="radio_btn radio_btn_1"
                    label="明天上午9：00-12:00"
                  >明天上午9：00-12:00</el-radio-button>
                  <el-radio-button
                    class="radio_btn radio_btn_1"
                    label="明天下午12:00-18:00"
                  >明天下午12:00-18:00</el-radio-button>
                  <el-radio-button
                    class="radio_btn radio_btn_1"
                    label="以上时间均不方便，请客服联系我"
                    id="last_radio_btn"
                  >以上时间均不方便，请客服联系我</el-radio-button>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="验车地址">
                <el-input v-model="address"></el-input>
              </el-form-item>
            </el-form>

            <div style="margin-left:100px;">
              <el-upload
                name="image"
                action="http://diamond.creatshare.com/upload"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img
                  width="100%"
                  :src="dialogImageUrl"
                  alt=""
                >
              </el-dialog>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="text-align:center">
        <el-button style="margin-top: 12px;" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
var imageUrl=[];
export default {
  data() {
    return {
        carnum: "",
        carmodel: "",
        cardate: "",
        cardistance: "",
        cardisplacement: "",
        carprice: "",
        telphone: "",
        address: "",
        dialogImageUrl: "",
        dialogVisible: false,
        appointment_time: "",
        active: 0
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess: function(response, file, fileList) {
      console.log("success");
      imageUrl.push(response.data.imageUrl);
      console.log(imageUrl);
    },
    submit: function() {
        var sellcar_params = new URLSearchParams()
        sellcar_params.append('brand', this.carnum)
        sellcar_params.append('model', this.carmodel)
        sellcar_params.append('cardTime', this.cardate) 
        sellcar_params.append('displacement', this.cardisplacement)
        sellcar_params.append('oldPrice', this.carprice)
        sellcar_params.append('phone', this.telphone)
        sellcar_params.append('faceImage', imageUrl[0])
        sellcar_params.append('otherImage', imageUrl[1])
        sellcar_params.append('area', this.address)
        sellcar_params.append('mileage', this.cardistance)
        sellcar_params.append('tokenId',localStorage.getItem('tokenId'))
        console.log(localStorage.getItem('tokenId'))
        this.$axios.post('http://39.108.160.89:8091/car/applySellCar',sellcar_params,
        )
        .then(function(response){
          console.log("success")
        })
        .catch(function(error) {
          console.log("error")
        })
    }
  } 
};
</script>

<style>
.radio_btn {
  margin: 5px;
  border-radius: 0px 0px 0px 0px;
}
.radio_btn_1 {
  border-left: 1px solid #dcdfe6;
}
.el-radio-button:last-child {
  border-radius: 5px 5px 5px 5px;
  width: 355px;
}
</style>
