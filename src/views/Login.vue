<template>
  <div id="login">

    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h1>Student Login</h1>
    <br>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <br>

    <div v-if="error">
      <p>{{ errorMsg }}</p>
    </div>

    <form id="loginForm">
      <input type="text" name="username" v-model="input.username" placeholder="Username" required=""/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" required=""/><br><br>
      <button type="button" name="loginButton" v-on:click="login()">Login</button>
      <button type="button" name="teacherLogin" v-on:click="teacherLogin()">Teachers</button>
      <br><br>
      <br><br>
    </form>

  </div>
</template>

<script>
import MainPage from "@/components/mainPage";

export default {
  name: 'Login',
  components: {
    MainPage
  },
  data() {
    return {
      error: false,
      errorMsg: "",
      foundUser: false,
      tempStudents: [],
      students: [],
      input: {
        username: "",
        password: ""
      }
    }
  },

  mounted() {
    fetch('http://127.0.0.1:3030/students')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.students = data.students;
        });
  },

  methods: {
    login() {

      this.error = false;
      this.submitted = false;

      this.handleJSON();

        for (let i = 0; i < this.tempStudents.length; i++) {

          let obj = this.tempStudents[i];

          if (this.input.username === obj.username && this.input.password === obj.password) {
            this.foundUser = true;
            this.$root.currentlyLoggedInUser = this.input.username;
            this.$emit("authenticated", true);
            this.$router.replace({name: "secure"});
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

    handleJSON() {

      for (let i = 0, l = this.students.length; i < l; i++) {
        let obj = this.students[i];

        let tempStudent = {
          username: obj.studentName, password: obj.studentPassword
        };

        this.tempStudents.push(tempStudent);

      }
    },
  },

}
</script>

<style scoped src="../assets/css/login.css">

</style>
