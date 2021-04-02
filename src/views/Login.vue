<template>
  <div class="app-container">
    <div class="login-content">
      <h3>登录系统</h3>
      <el-form ref="form">
        <el-form-item>
          <svg-icon className="svg-user" iconClass="user" />
          <el-input v-model="formData.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <svg-icon className="svg-password" icon-class="password" />
          <el-input v-model="formData.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox label="记住密码" v-model="formData.remember" name="type"></el-checkbox>
        <el-button class="login-submit"  type="primary" @click="loginHandle">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { UserModule } from '@/store/modules/user'
import { Component, Prop, Vue } from 'vue-property-decorator'

type LoginForm = {
  username: string,
  password: string
  remember: boolean
}

@Component
export default class Login extends Vue {
  private formData: LoginForm = {
    username: 'Admin',
    password: 'admin',
    remember: false
  }

  private async loginHandle() {
    if (this.formData.username && this.formData.password) {
      await UserModule.login({username: this.formData.username, password: this.formData.password})
      let redirect = this.$router.currentRoute.query.redirect;
      this.$router.push(redirect ? redirect.toString() : '/').then()
    }
  }
}
</script>
