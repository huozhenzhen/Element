
<template>
<div class="login-container">
	<el-form :model="ruleForm" :rules='rules' status-icon ref="ruleForm"  class="login-form">
		<el-form-item prop="username">
            <span class="svg-container svg-container_login">
               	<svg-icon icon-class="user" />
             </span>
			<el-input type="text" size="big" v-model="ruleForm.username" name='username' auto-complete="off" ></el-input>
		</el-form-item>
		<el-form-item prop="password">
			<span class="svg-container">
			 	<svg-icon icon-class="password"></svg-icon>
		   </span>
			<el-input type="password" size="big"  v-model="ruleForm.password" name='password' auto-complete="off" ></el-input>
			<!-- <span class="show-pwd"><svg-icon icon-class="eye" /></span> -->
		</el-form-item>
		<el-form-item style="text-align: right;">
			<el-button type="primary"  :loading ='loading' style="width:100%;"  @click="submitForm('ruleForm')">登录</el-button>
		</el-form-item>
	</el-form>
</div>
</template>

<script>
export default {

	data() {
		var validateUsername = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入用户名'));
			} else {
				callback();
			}
		};
		var validatePassWord = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				username:'',
				password: ''
			},
			loading: false,
			rules: {
				username: [{
					required: true,
					validator: validateUsername,
					trigger: 'blur'
				}],
				password: [{
					required: true,
					validator: validatePassWord,
					trigger: 'blur'
				}]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(res => {
				if(res) {
					this.loading = true;
					this.$store.dispatch('Login', this.ruleForm)
					.then(() => {
						this.loading = false;
						this.$router.push({path:'/hello'})
					}).catch((err) => {
						this.loading = false;
					});
				}
			})
		},
	}
}
</script>

<style lang="scss">
.login-container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #5d669b;
	.login-form {
	    width: 300px;
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    margin-left: -150px;
	    margin-top: -100px;
		.el-input {
			display: inline-block;
			height: 47px;
			width: 88%;
		}
		.show-pwd {
			position: absolute;
			right: 6px;
			top: 0;
		}
		.svg-container {
			vertical-align: middle;
			width: 30px;
			display: inline-block;
			color: #5d669b;
			z-index: 1;
			text-align: center;
			background-color: #fff;
			border-radius: 50%;
			&_login {
			  font-size: 20px;
			}
		 }
	}

}


</style>
