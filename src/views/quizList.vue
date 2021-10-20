<template>
  <div>
    <h1>This is where our main quiz page will be.</h1>
    <p>Navigate quiz, see your high score</p>

    <ul>
      <li>
        ADDITION QUIZ<br>
        <button type="button" v-on:click="additionQuiz">Go</button>
      </li>
      <li>
        SUBTRACTION QUIZ<br>
        <button type="button" v-on:click="subtractionQuiz">Go</button>
      </li>
      <li>
        MULTIPLICATION QUIZ<br>
        <button type="button" v-on:click="multiplicationQuiz">Go</button>
      </li>
      <li>
        DIVISION QUIZ<br>
        <button type="button" v-on:click="divisionQuiz">Go</button>
      </li>
      <li>
        MIXED QUIZ<br>
        <button type="button" v-on:click="mixedQuiz">Go</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      submitted: false,
      error: false,
      errorMsg: "",
      registeredUsers: [],
      newUser: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    additionQuiz() {
      this.$router.replace({name: "addition"});
    },
    subtractionQuiz() {
      this.$router.replace({name: ""});
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

<style scoped src="../assets/css/login.css"></style>