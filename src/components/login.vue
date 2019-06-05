<template>
    <div>
        <transition name="bounce">
            <el-card class="box-card" v-if="show">
                <div slot="header" class="clearfix">
                    <span>offer二手车</span>
                </div>
                <div>
                    <div>
                        <el-input prefix-icon="" id="account" v-model="input_account" placeholder="请输入账号"></el-input>
                    </div>
                    <div>
                        <el-input id="password" placeholder="请输入密码" v-model="input_password"></el-input>
                    </div>
                    <div>
                        <el-button class="btn" id="btn_login" type="primary" plain>登陆</el-button>
                    </div>
                    <div>
                        <el-button class="btn" id="btn_signin" type="success" plain>注册</el-button>
                    </div>
                </div>
            </el-card>
        </transition>
        <el-button id="btn_transition" @click="show = !show" style="display:none">Click Me</el-button>
    </div>
</template>

<script>
    window.onload=function(){
        document.getElementById("btn_transition").click();
    }
    export default {
        name:'Login',
        data() {
            return {
                input_account: '',
                input_password: '',
                show:false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    body {
        background-image: url("../assets/timg.jpg");
        background-repeat: no-repeat;
	    background-size: 100%;
    }
    .box-card {
        margin-left: 900px;
        width: 30%;
    }
    #password {
        margin-top: 20px; 
        width: 90%;
    }
    #account {
        width: 90%;
        margin-top: 10px;
    }
    .btn {
        width: 90%;   
    }
    #btn_login,#btn_signin {
        margin-top: 20px;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
</style>
