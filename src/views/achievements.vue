<template>
  <div class="achievement" id="achievement">
    <h1>{{ currentUser }}'s Achievements:</h1>
    <p>Your total score: {{ studentScore }} </p>
    <button type="button" name="back" v-on:click="goBack()">Back</button>

    <p id="loggedInUser">Logged in as: <br>
      {{ currentUser }}
    </p>

  </div>
</template>

<script>


export default {
  name: "achievements",
  data: function () {
    return {
      currentUser: this.$root.currentlyLoggedInUser,
      studentScore: 0,
      studentName: [],
      students: []
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
        .then(() => this.showScoreForCurrentUser())

  },
  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },

    showScoreForCurrentUser() {

      this.studentScore = this.students.find(x => x.studentName === this.currentUser).studentScore;

    }

  }
}
</script>

<style scoped src="../assets/css/quiz.css">

</style>
