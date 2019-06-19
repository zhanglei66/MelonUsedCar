<template>
    <div id="bck">
        <transition name="bounce">
            <el-card class="box-card" v-if="show" style="margin-top:50px;"  v-loading="loading">
                <div slot="header" class="clearfix">
                    <span>登陆</span>
                </div>
                <div>
                    <div>
                        <el-input prefix-icon="" style="width:90%" id="account" v-model="input_account" placeholder="请输入账号"></el-input>
                    </div>
                    <div>
                        <el-input type="password" id="password" style="margin-top: 20px; width: 90%;" placeholder="请输入密码" v-model="input_password"></el-input>
                    </div>
                    <div id="verification" style="display:none">
                        <el-col :span="6">
                            <img src="http://222.24.63.59:9067/getcode" alt="" style="width:100%">
                        </el-col>
                        <el-col :span="18">
                            <el-input v-model="verification" placeholder="请输入验证码"></el-input>
                        </el-col>
                    </div>

                    <div>
                        <el-button class="btn" id="btn_login" @click="login()" type="primary" plain>登陆</el-button>
                    </div>
                    <div>
                        <el-button class="btn" id="btn_signin" type="success" @click="register" plain>注册</el-button>
                    </div>
                </div>
            </el-card>
        </transition>
        <el-button id="btn_transition" @click="show = !show ;" style="display:none">Click Me</el-button>
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
                show:false,
                loading: false
            }
        },
        mounted(){
            document.getElementById("btn_transition").click();
        },
        methods: {
            login: function() {
                var params = new URLSearchParams()
                params.append('email', this.input_account)
                params.append('password', this.input_password) 
                // params.append('revix', this.verification)
                this.$axios({
                    method: 'post',
                    url: 'http://39.108.160.89:8081/user/login',
                    data: params
                })
                .then((response) => {
                    localStorage.setItem("tokenId", response.data.data);
                    this.$router.push({path:'/user/homepage'})
                    this.$parent.seen = false
                })
                .catch(function(error) {
                })
            },
            register: function() {
                this.$router.push("/user/register");
            },
            jump : function() {
                this.$router.push("/user/homepage");
            }
        }

        
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #bck {
        height: 100%;
        width: 100%;
        background-image: url("../../assets/car.gif");
        background-repeat: no-repeat;
	    background-size: 100%;
        position: fixed;  
    }
    .box-card {
        margin-left: 900px;
        width: 30%;
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
