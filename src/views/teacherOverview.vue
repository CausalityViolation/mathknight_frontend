<template>
  <div id="overview">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h3>Registered Students:</h3>
    <ul>

      <li v-for="student in students" v-bind:key="student.studentName">
        | {{ student.studentName }} Score:
        {{ student.studentScore }} Age:
        {{ student.studentAge }} |
      </li>
    </ul>

    <form id="loginForm">
      <input type="text" name="name" v-model="input.name" placeholder="Student Name"/>
      <input type="text" name="password" v-model="input.password" placeholder="Password"/>
      <input type="text" name="age" v-model="input.age" placeholder="Age"/><br><br>
      <button type="button" name="addStudent" v-on:click="postToServer"> Add Student</button>
      <br><br>
    </form>
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
      input: {
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
          console.log(data.students);
          this.students = data.students;
        });
  },
  methods: {

    postToServer() {
      const axios = require('axios').default;
      axios.post('http://127.0.0.1:3030/students', {
        studentName: this.input.name,
        studentPassword: this.input.password,
        studentAge: this.input.age
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

      this.input.name = "";
      this.input.password = "";
      this.input.age = "";

      this.getFromServer();

    },
    getFromServer() {
      fetch('http://127.0.0.1:3030/students')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.students);
            this.students = data.students;
          });
    }
  }
}

</script>

<style scoped src="../assets/css/login.css">

</style>