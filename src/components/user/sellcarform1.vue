<template>
    <div style="width:460px; margin: 0 auto;">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="车牌">
          <el-input v-model="form.carnum"></el-input>
        </el-form-item>
        <el-form-item label="车型">
          <el-col :span="12">
            <el-select v-model="form.carmodel1" placeholder="品牌">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-select v-model="form.carmodel2" placeholder="车系">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="上牌时间">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.cardate" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="行驶里程">
          <el-input v-model="form.cardistance"></el-input>
        </el-form-item>
        <el-form-item label="排量">
            <el-input v-model="form.cardisplacement"></el-input>
        </el-form-item>
        <el-form-item label="二手价">
            <el-input v-model="form.carprice"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="form.telphone"></el-input>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        form: {
          carnum: '',
          carmodel1: '',
          carmodel2: '',
          cardate: '',
          cardisplacement: '',
          carprice: '',
          telphone:''
        }
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
  
</style>
