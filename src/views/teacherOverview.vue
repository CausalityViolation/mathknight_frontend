<template>
  <div id="overview">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <h3>Student Overview:</h3>
    <ul>

      <li v-for="student in students" v-bind:key="student.studentName">
        | {{ student.studentName }} Score:
        {{ student.studentScore }} Age:
        {{ student.studentAge }} |
      </li>

    </ul>
    <logout/>
  </div>
</template>

<script>
import logout from "@/components/logout"

import MainPage from "@/components/mainPage";

export default {
  components: {
    logout,
    MainPage
  },
  data: function () {
    return {
      students: []

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
  }
}

</script>

<style scoped src="../assets/css/login.css">

</style>