<template>
  <div id="overview">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h3>Registered Students:</h3>
    <ul>

      <li v-for="student in students" v-bind:key="student.studentName">
        | {{ student.studentName }} Score:
        {{ student.studentScore }} Correct Answers:
        {{ student.studentAnsQ }} Wrong Answers:
        {{ student.studentWrongAns }} Age:
        {{ student.studentAge }} |
      </li>
    </ul>

    <ul>
      <li>{{ replyMessage }}</li>
    </ul>

    <form id="loginForm">
      <input type="text" name="name" v-model="input.name" placeholder="Student Name"/>
      <input type="text" name="password" v-model="input.password" placeholder="Password"/>
      <input type="text" name="age" v-model="input.age" placeholder="Age"/><br><br>
      <button type="button" name="addStudent" v-on:click="addNewStudentToServer"> Add Student</button>
      <br><br>
    </form>

    <h3>Enter the name of a student to RESET his/her points</h3>
    <form>
      <input type="text" name="name" v-model="input.studentWhoLosesAllPoints" placeholder="Student Name"/><br><br>
      <button type="button" name="resetPoints" v-on:click="resetStudentScore">RESET</button>
    </form>
    <br><br>

    <h3>Enter a student name to DELETE him/her from the registry</h3>
    <form>
      <input type="text" name="name" v-model="input.studentWhoGetsDeleted" placeholder="Student Name"/><br><br>
      <button type="button" name="deleteStudent" v-on:click="deleteStudent">DELETE</button>
    </form>
    <br><br>

    <button type="button" name="logout" v-on:click="logout()">Log out</button>
  </div>
</template>

<script>

import MainPage from "@/components/mainPage";

export default {
  components: {
    MainPage
  },
  data: function () {
    return {
      students: [],
      replyMessage: "",
      errorCode: "",
      input: {
        studentWhoLosesAllPoints: "",
        studentWhoGetsDeleted: "",
        name: "",
        password: "",
        age: ""
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

    logout() {
      this.$router.replace({name: "login"})
    },

    addNewStudentToServer() {

      if (this.input.name == "" || this.input.password || "" || this.input.age == "") {
        this.replyMessage = "Please fill out all the fields before submitting."
      }

      const axios = require('axios').default;
      axios.post('http://127.0.0.1:3030/students', {
        studentName: this.input.name,
        studentPassword: this.input.password,
        studentAge: this.input.age
      })
          .then((response) => {
            this.replyMessage = JSON.stringify(response.data);

            if (this.replyMessage.includes("success")) {
              this.replyMessage = "Student successfully added to Database"
            }
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(() => this.getFromServer())

      this.input.name = "";
      this.input.password = "";
      this.input.age = "";


    },

    resetStudentScore() {
      const axios = require('axios').default;
      axios.put('http://127.0.0.1:3030/students/reset', {
        studentName: this.input.studentWhoLosesAllPoints
      }).then(() => this.getFromServer())

      this.input.studentWhoLosesAllPoints = "";
      this.replyMessage = "";
    },

    deleteStudent() {
      const axios = require('axios').default;
      axios.delete('http://127.0.0.1:3030/students', {
        data: {
          studentName: this.input.studentWhoGetsDeleted
        }
      })
          .catch(function (error) {
            console.log(error);
          })
          .then(() => this.getFromServer())

      this.input.studentWhoGetsDeleted = "";
      this.replyMessage = "";

    },


    getFromServer() {
      fetch('http://127.0.0.1:3030/students')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.students = data.students;
          });
    },
  }

}

</script>

<style scoped src="../assets/css/login.css">

</style>