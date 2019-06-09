<template>
    <div id="bck">
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
                    <div id="verification">
                        <el-col :span="6">
                            <img src="" alt="" style="width:20%">
                        </el-col>
                        <el-col :span="18">
                            <el-input v-model="verification" placeholder="请输入验证码"></el-input>
                        </el-col>
                    </div>
                    <div>
                        <el-button class="btn" id="btn_login" @click="login()" type="primary" plain>登陆</el-button>
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
    export default {
        name:'Login',
        data() {
            return {
                input_account: '',
                input_password: '',
                verification:'',
                show:false
            }
        },
        mounted(){
            document.getElementById("btn_transition").click();
        },
        methods: {
            login: function() {
                this.$axios.get('/login/1/1')
                .then(function(response) {
                    console.log("success");
                    console.log(response.data.data.name)
                })
                .catch(function(error) {
                    console.log("error");
                })
            }
        }
        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #bck {
        height: 100%;
        width: 100%;
        background-image: url("../../assets/car.gif");
        background-repeat: no-repeat;
	    background-size: 100%;
        position: fixed;
        z-index: -1;
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
    #verification {
        margin-top: 20px;
        width: 90%;
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
