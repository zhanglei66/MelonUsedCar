<template>
  <div>
    <div>
        <el-steps style="margin-top:40px" :active="active" finish-status="success" :alignCenter="true">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
    </div>
    <div style="text-align:center; margin-top: 20px;">
        <div>
            <label for="">正面照片</label>
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
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>    
        </div>
        <div style="margin-top:20px;">
            <label for="">其他照片</label>
            <el-upload
                action=""
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :auto-upload="false">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>    
        </div>
    </div>
    <div style="text-align:center">
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
  import vm from "../../event";
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        active: 2
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
        console.log("success")
        console.log(response.data.imageUrl);
      },
      uploadall: function() {
        console.log(form1.data().form.carnum);
      },
      next() {
        if (this.active++ > 2) this.active = 0;
        this.receive();
        // this.$router.push("/user/sellcarform");
      },
      receive:function() {
        vm.$on('myFun',(form)=>{
              console.log(form);
          })
      },
    }
    
  }
</script>

<style>
    
</style>
