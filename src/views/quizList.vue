<template>
  <div>
    <h1>Quiz List</h1>

    <p>Collect points to unlock more Quiz!</p>
    <ul>
      <li>Select the Quiz you'd like to try or show your achievements</li>
      <li>
        <br>
        ADDITION QUIZ<br>
        <button type="button" v-on:click="additionQuiz">Go</button>
        <br>
      </li>
      <li v-if="userScore>=10">
        <br>
        SUBTRACTION QUIZ<br>
        <button type="button" v-on:click="subtractionQuiz">Go</button>
        <br>
      </li>
      <li v-if="userScore>=20">
        <br>
        MULTIPLICATION QUIZ<br>
        <button type="button" v-on:click="multiplicationQuiz">Go</button>
        <br>
      </li>
      <li v-if="userScore>=30">
        <br>
        DIVISION QUIZ<br>
        <button type="button" v-on:click="divisionQuiz">Go</button>
        <br>
      </li>
      <li>
        <br>
        <br>
        <br>
        ACHIEVEMENTS<br>
        <button type="button" v-on:click="achievementsPage">Go</button>
        <br>
      </li>
    </ul>

    <p id="loggedInUser">Logged in as: <br>
      {{ currentUser }}
    </p>

  </div>

</template>

<script>
export default {
  name: 'QuizList',
  data() {
    return {
      currentUser: this.$root.currentlyLoggedInUser,
      userScore: ""
    }
  },
  methods: {
    additionQuiz() {
      this.$router.replace({name: "addition"});
    },
    subtractionQuiz() {
      this.$router.replace({name: "subtract"});
    },
    multiplicationQuiz() {
      this.$router.replace({name: "multiply"});
    },
    divisionQuiz() {
      this.$router.replace({name: "division"});
    },
    achievementsPage() {
      this.$router.replace({name: "achievements"});
    },
    unlockQuizForUser() {

      this.userScore = this.students.find(x => x.studentName === this.currentUser).studentScore;

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
        .then(() => this.unlockQuizForUser())
  }
}
</script>

<style scoped src="../assets/css/quiz.css">

</style>
