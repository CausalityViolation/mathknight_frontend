<template>
  <div id="login">

    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h1>Student Login</h1>
    <br>
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <br>

    <form>
      <input type="text" name="username" v-model="input.username" placeholder="Username" required=""/>
      <input type="password" name="password" v-model="input.password" placeholder="Password" required=""/><br><br>
      <button type="button" name="loginButton" v-on:click="login()">Login</button>
      <button type="button" name="signUpButton" v-on:click="register()">Register</button>
      <br><br>
      <button type="button" name="teacherLogin" v-on:click="teacherLogin()">Teacher Login</button>
      <br><br>
      <button type="button" name="teacherOverviewTESTTTTTTTTT" v-on:click="teacherOverviewTEST">NEW PAGES TEST BUTTON</button>
      <button type="button" name="handleJSON" v-on:click="handleJSON">TEST</button>

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
      students: [],
      stringifiedStudentList: [],
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
          console.log(data.students);
          this.students = data.students;
        });
  },

  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit("authenticated", true);
          this.$router.replace({name: "secure"});
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
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

    handleJSON() {

      this.stringifiedStudentList.length = 0;

      let students = JSON.stringify(this.students).replace(/(?![A-Z])./g, '');

      console.log(students)

    }
  },

}
</script>

<style scoped src="../assets/css/login.css">

</style>
