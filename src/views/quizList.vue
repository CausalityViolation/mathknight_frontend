<template>
  <div>
    <h1>This is where our main quiz page will be.</h1>
    <p>Navigate quiz, see your high score</p>

    <ul>
      <li>
        ADDITION QUIZ<br>
        <button type="button" v-on:click="additionQuiz">Go</button>
        <br>
      </li>
      <li>
        SUBTRACTION QUIZ<br>
        <button type="button" v-on:click="subtractionQuiz">Go</button>
        <br>
      </li>
      <li>
        MULTIPLICATION QUIZ<br>
        <button type="button" v-on:click="multiplicationQuiz">Go</button>
        <br>
      </li>
      <li>
        DIVISION QUIZ<br>
        <button type="button" v-on:click="divisionQuiz">Go</button>
        <br>
      </li>
      <li>
        MIXED QUIZ<br>
        <button type="button" v-on:click="mixedQuiz">Go</button>
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
      this.$router.replace({name: ""});
    },
    divisionQuiz() {
      this.$router.replace({name: ""});
    },
    mixedQuiz() {
      this.$router.replace({name: ""});
    },


  }
}
</script>

<style scoped src="../assets/css/login.css">

</style>