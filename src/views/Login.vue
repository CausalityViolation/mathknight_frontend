<template>
  <div id="login">

    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h1>Student Login</h1>
    <br>
    <img alt="Vue logo" class="logo-home" src="../assets/logo.png">
    <br>
    <br>

    <div v-if="error">
      <p>{{ errorMsg }}</p>
    </div>

    <form>
      <div id="textBox">
        <input type="text" name="username" v-model="input.username" placeholder="Username" required=""/>
        <input type="password" name="password" v-model="input.password" placeholder="Password" required=""/><br><br>
      </div>
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
      wrongInput: new Audio(require("../assets/wrongLogin.mp3")),
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
        })

  },

  methods: {
    login() {

      this.error = false;

      this.handleJSON();

      for (let i = 0; i < this.tempStudents.length; i++) {

        let obj = this.tempStudents[i];

        if (this.input.username.toUpperCase() === obj.username && this.input.password === obj.password) {

          this.$root.buttonSound.volume = 0.2
          this.$root.buttonSound.play()

          this.foundUser = true;
          this.$root.currentlyLoggedInUser = this.input.username.toUpperCase();
          this.$emit("authenticated", true);
          this.$router.replace({name: "secure"});
          this.playTheme()
        }
      }

      if (!this.foundUser) {

        this.wrongInput.volume = 0.2;
        this.wrongInput.play();

        this.error = true;
        this.errorMsg = "Invalid Username and / or Password."
        this.input.username = "";
        this.input.password = "";
      }

    },
    teacherLogin() {
      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()
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
    playTheme() {
      this.$root.theme.volume = 0.1;
      this.$root.theme.play()
    }
  },

}
</script>

<style scoped src="../assets/css/login.css">

</style>
