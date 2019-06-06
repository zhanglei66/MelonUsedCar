<template>
    <div style="width:460px; margin: 0 auto;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="验车时间">
          <el-radio-group v-model="appointment_time">
              <el-radio-button class="radio_btn" label="1">今天上午9：00-12:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="2">今天下午12:00-18:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="3">明天上午9：00-12:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="4">明天下午12:00-18:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="5" id="last_radio_btn">以上时间均不方便，请客服联系我</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="验车地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          appointment_time: true,
          address: ''
        },
        appointment_time: true
      }
  },

  methods: {
    onSubmit() {
        console.log('submit!');
    }
  }
};
</script>

<style>
  .radio_btn{
    margin: 5px;
    border-radius: 0px 0px 0px 0px;
  }
  .radio_btn_1{
    border-left: 1px solid #DCDFE6;
  }
  .el-radio-button:last-child{
    border-radius: 5px 5px 5px 5px;
    width: 355px;
  }
</style>
