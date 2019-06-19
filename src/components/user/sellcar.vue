<template>
  <div>
    <div>
      <el-steps id="step" :active="active" finish-status="success" :alignCenter="true">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <!-- s -->
    </div>
    <router-view style="margin-top:30px;"></router-view>
    <div style="text-align:center">
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        active: 0,
      }
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      if(this.active == 1) {
        this.$router.push("/user/sellcar/sellcarform2")
      }
      else if(this.active == 2) {
        this.$router.push("/user/sellcar/sellcarform3")
      }
    }
  }
};
</script>

<style>
  #step{
    margin-top: 40px;
  }
</style>
