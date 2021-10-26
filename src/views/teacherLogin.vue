<template>
  <div id="login">
    <h1>Teacher Login</h1>

    <div v-if="error">
      <p>{{ errorMsg }}</p>
    </div>

    <form id="loginForm">
      <input type="text" name="username" v-model="input.username" placeholder="Teacher ID"/>
      <input type="password" name="password" v-model="input.password" placeholder="Password"/><br><br>
      <button type="button" name="loginButton" v-on:click="login()">Login</button>
      <button type="button" name="back" v-on:click="goBack()">Back</button>
      <br><br>
    </form>
  </div>
</template>

<script>

export default {

  name: 'teacherLogin',

  data() {
    return {
      error: false,
      errorMsg: "",
      foundUser: false,
      tempTeachers: [],
      teachers: [],
      input: {
        username: "",
        password: ""
      }
    }
  },

  mounted() {
    fetch('http://127.0.0.1:3030/teachers')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.teachers = data.teachers;
        });
  },

  methods: {
    login() {

      this.error = false;
      this.submitted = false;

      this.handleJSON();

      for (let i = 0; i < this.tempTeachers.length; i++) {

        let obj = this.tempTeachers[i];

        if (this.input.username === obj.username && this.input.password === obj.password) {
          this.foundUser = true;
          this.$emit("authenticated", true);
          this.$router.replace({name: "teacherOverview"});
        }
      }

      if(!this.foundUser) {
        this.error = true;
        this.errorMsg = "Invalid Username and / or Password."
        this.input.username = "";
        this.input.password = "";
      }

    },
    teacherLogin() {
      this.$router.replace({name: "teacherLogin"})
    },

    goBack() {
      this.$router.replace({name: "login"})
    },

    handleJSON() {

      for (let i = 0, l = this.teachers.length; i < l; i++) {
        let obj = this.teachers[i];

        let tempTeacher = {
          username: obj.teacherName, password: obj.teacherPassword
        };

        this.tempTeachers.push(tempTeacher);

      }
    },
  },

}
</script>

<style scoped src="../assets/css/login.css">

</style>
