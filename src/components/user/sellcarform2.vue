<template>
  <div>
    <div>
        <el-steps style="margin-top:40px" :active="active" finish-status="success" :alignCenter="true">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
    </div>
    <div style="width:460px; margin:20px auto 0 auto;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="验车时间">
          <el-radio-group v-model="appointment_time">
              <el-radio-button class="radio_btn" label="今天上午9：00-12:00">今天上午9：00-12:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="今天下午12:00-18:00">今天下午12:00-18:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="明天上午9：00-12:00">明天上午9：00-12:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="明天下午12:00-18:00">明天下午12:00-18:00</el-radio-button>
              <el-radio-button class="radio_btn radio_btn_1" label="以上时间均不方便，请客服联系我" id="last_radio_btn">以上时间均不方便，请客服联系我</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="验车地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="text-align:center">
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          address: ''
        },
        appointment_time: "今天上午9：00-12:00",
        active: 1
      }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      this.$router.push("/user/sellcarform3");
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
