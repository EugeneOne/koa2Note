<template>
  <div id="login">
      <div class="main layout">
        <Layout>
            <Header>
              <Menu mode="horizontal" active-name="1" @on-select="changMenu">
                <MenuItem name="1">
                    <Icon type="ios-paper"></Icon>
                    登录
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people"></Icon>
                    注册
                </MenuItem>
            </Menu>
            </Header>
            <Content>
              <Form label-position="left" v-if="activeMenu == 1" ref="formLogin" :model="formLogin" :rules="ruleLogin" :label-width="100">
                    <FormItem label="用户名" prop="name">
                        <Input type="text" v-model="formLogin.name"/>
                    </FormItem>
                    <FormItem label="密码" prop="password">
                        <Input type="password" v-model="formLogin.passwd"/>
                    </FormItem>
                </Form>
                <Form label-position="left" v-if="activeMenu == 2" ref="formRegister" :model="formRegister" :rules="ruleRegister" :label-width="100">
                    <FormItem label="用户名" prop="name">
                        <Input type="text" v-model="formRegister.name"/>
                    </FormItem>
                    <FormItem label="密码" prop="password">
                        <Input type="password" v-model="formRegister.passwd"/>
                    </FormItem>
                    <FormItem label="再次输入密码" prop="passwordCheck">
                        <Input type="password" v-model="formRegister.passwdCheck"/>
                    </FormItem>
                </Form>
            </Content>
            <Footer>
              <Button type="primary" @click="handleSubmit()">{{btnLTxt}}</Button>
              <Button type="ghost" @click="handleReset()" style="margin-left: 8px">{{btnLRxt}}</Button>
            </Footer>
        </Layout>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  mounted() {
    console.log(this.moment().format("YYYY-MM-DD h:mm:ss"));
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formRegister.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formRegister.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formRegister.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };

    return {
      formLogin: {
        name: "",
        passwd: ""
      },
      formRegister: {
        name: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleRegister: {
        //password: [{ validator: validatePass, trigger: "blur" }]
      },
      ruleLogin: {},
      activeMenu: 1,
      btnLTxt: "登录",
      btnLRxt: "重置"
    };
  },
  watch: {
    activeMenu() {
      if (this.activeMenu == 1) {
        this.btnLTxt = "登录";
      } else {
        this.btnLTxt = "注册";
      }
    }
  },
  methods: {
    handleSubmit(name) {
      if (this.activeMenu == 1) {
        this.login(this.formLogin.name, this.formLogin.passwd);
      } else {
        this.register(this.formRegister.name, this.formRegister.passwd);
      }

      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     //this.register(this.formRegister.name, this.formRegister.passwdCheck);
      //     //this.$Message.success("Success!");
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
    },
    handleReset() {},
    changMenu(value) {
      this.activeMenu = value;
    },
    login(name, password) {
      this.$ajax.post(this.$api.Login, {
        name: name,
        password: password
      });
    },
    register(name, password) {
      this.$ajax.post(this.$api.Register, {
        name: name,
        password: password
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    width: 500px;
    height: 800px;
    .ivu-layout {
      height: 100%;
      .ivu-layout-header {
        height: 8%;
        padding: 0;
        .ivu-menu {
          height: 100%;
          width: 100%;
        }
      }
      .ivu-layout-content {
        height: 70%;
        margin: 50px;
        .ivu-form {
          margin-top: 80px;
        }
      }
      .ivu-layout-footer {
        height: 10%;
      }
    }
  }
}
</style>
