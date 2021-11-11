<template>
  <div class="achievement" id="achievement">
    <h1>{{ currentUser }}'s Stats</h1>
    <p>Total answered questions:<br> {{ answeredQuestions }}</p>
    <p>Your total score:<br> {{ studentScore }}</p>
    <p>Correct answers:<br> {{ percentage }}</p>
    <p>Total incorrect answers, including questions left blank: <br>{{ studentWrongAnsQ }} </p>
    <br>


    <h1>Unlocked Achievements:</h1><br>

    <div id="imgBox">
      <img v-if="this.$root.maxPointsAddition" src="../assets/additionAchi.jpeg">
      <img v-if="this.$root.maxPointsSubtraction" src="../assets/subtractionAchi.jpeg">
      <img v-if="this.$root.maxPointsMultiplication" src="../assets/multiplicationAchi.jpg">
      <img v-if="this.$root.maxPointsDivision" src="../assets/additionAchi.jpeg">
    </div>
    <br>

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
      answeredQuestions: 0,
      studentScore: 0,
      studentAnsQ: 0,
      studentWrongAnsQ: 0,
      percentage: "",
      percentageWrong: "",
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
        .then(() => this.showStatsForCurrentUser())

  },
  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },

    showStatsForCurrentUser() {

      this.studentScore = this.students.find(x => x.studentName === this.currentUser).studentScore;
      this.answeredQuestions = this.students.find(x => x.studentName === this.currentUser).studentAnsQ;
      this.studentWrongAnsQ = this.students.find(x => x.studentName === this.currentUser).studentWrongAns;

      this.percentage = Math.round((this.studentScore / this.answeredQuestions) * 100) + "%";

    },

  }
}
</script>

<style scoped src="../assets/css/quiz.css">

</style>
