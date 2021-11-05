<template>
  <div>
    <h1>Quiz List</h1>


    <ul>
      <li>Select the Quiz you'd like to try or show your achievements</li>
      <li>
        <br>
        ADDITION QUIZ<br>
        <button type="button" v-on:click="additionQuiz">Go</button>
        <br>
      </li>
      <li>
        <br>
        SUBTRACTION QUIZ<br>
        <button type="button" v-on:click="subtractionQuiz">Go</button>
        <br>
      </li>
      <li>
        <br>
        MULTIPLICATION QUIZ<br>
        <button type="button" v-on:click="multiplicationQuiz">Go</button>
        <br>
      </li>
      <li>
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
  </div>
</template>

<script>
export default {
  name: 'QuizList',
  data() {
    return {}
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
    }
  }
}
</script>

<style scoped src="../assets/css/quiz.css">

</style>
