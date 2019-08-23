<template>
  <!--必须先写div-->
  <div>
    <el-form ref="form" :model="form" label-width="80px" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎登陆</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: ""
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //设置登陆成功
            sessionStorage.setItem('isLogin', 'true');

            this.$store.dispatch('asyneUpdateUser', {username: this.form.username});
            //
            this.$router.push({name:'main',params:{username:this.form.username}});
          } else {
            this.$message({
              message: '验证失败',
              type: 'warning'
            });
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 350px;
    margin: 180px auto;
    border: 1px solid #DCDFE6;
    border-radius: 10px;
    padding: 35px;
    box-shadow: 0 0 10px;
  }

  .login-title {
    text-align: center
  }
</style>
