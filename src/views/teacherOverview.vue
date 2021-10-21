<template>
  <div id="overview">
    <h1>MATH KNIGHT</h1>
    <h2>Math made fun!</h2>
    <h3>Teacher Overview:</h3>
    <ul>
      <!---
      <li v-for="student in students" v-bind:key="student.studentNamn">
        | {{ student.studentNamn }}
        {{ student.studentScore }} |
        --->
    </ul>
    <logout/>
  </div>
</template>

<script>
import logout from "@/components/logout"

export default {
  components: {
    logout
  },
  data: function () {
    return {

    }
  },
  mounted() {
    fetch('http://127.0.0.1:3030/pigs/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.pigs);
          this.grisar = data.pigs;
        });
  }
}

</script>

<style scoped src="../assets/css/login.css">

</style>