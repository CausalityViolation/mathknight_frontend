<template>
  <div id="login">
    <h1>Teacher Login</h1>

    <form>
      <input type="text" name="username" v-model="input.username" placeholder="Teacher ID" required=""/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" required=""/><br><br>
      <button type="button" name="loginButton" v-on:click="login()">Login</button>
      <button type="button" name="back" v-on:click="goBack()">Back</button>
      <br><br>
    </form>
  </div>
</template>

<script>
export default {

  name: 'Login',
  data() {
    return {
      users: [],
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({name: "secure"});
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
    register() {
      this.$router.replace({name: "register"});
    },
    teacherLogin() {
      this.$router.replace({name: "teacherLogin"})
    },
    teacherOverviewTEST() {
      this.$router.replace({name: "teacherOverview"})
    },
    goBack() {
      this.$router.replace({name: "login"})
    }
  },

}
</script>

<style scoped src="../assets/css/login.css">

</style>
