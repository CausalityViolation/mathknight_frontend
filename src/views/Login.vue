<template>
  <div id="login">
    <h1>Login</h1>

    <form>
      <input type="text" name="username" v-model="input.username" placeholder="Username" required=""/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" required=""/>
      <button type="button" name="loginButton" v-on:click="login()">Login</button>
      <button type="button" name="signUpButton" v-on:click="register()">Register</button>
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
    }
  },
}
</script>

<style scoped src="../assets/css/login.css"></style>
