<template>
  <body>
  <div>
    <h1>Level 5 - Causality Violation</h1>
    <p v-if="pass.length<1 && !showQuiz">Warning!
      <br>Once you start this quiz there will be no turning back.</p>
  </div>

  <div class="quiz" v-if="showQuiz">
    <form method="POST" id="quiz">

      <h1>What linear system does this code simulate?</h1>

      <img id="doom" src="../assets/doom.jpg">

      <div>
        <input type="text" name="Question 1 Answer" placeholder="Answer" v-model="input.answer1"/>
      </div>
    </form>
  </div>

  <br>
  <img v-if="chungus" src="../assets/chungus.jpg">
  <img v-if="pass" src="../assets/praiseTheSun.jpg">
  <p>{{ message }}</p>
  <button v-if="!showQuiz" type="button" name="backButton" v-on:click="goBack()">Back</button>
  <button type="button" name="startButton" v-on:click="startQuiz" v-if="showStart">START QUIZ</button>
  <button type="button" name="submitButton" v-if="showSubmit" v-on:click="calculateScore">Submit</button>


  <p id="loggedInUser">Logged in as: <br>
    {{ currentUser }}
  </p>

  <p id="timer" v-if="showQuiz">Time Left:
    {{ timerCount }}</p>

  </body>
</template>

<script>

export default {
  name: "Quiz",
  data: function () {
    return {

      currentUser: this.$root.currentlyLoggedInUser,
      rawData: [],
      students: [],
      achiPoints: 0,
      showQuiz: false,
      showStart: true,
      showSubmit: false,
      chungus: false,
      timerCount: "",
      message: "",
      pass: "",

      input: {

        answer1: "",
      },
    }
  },

  watch: {

    timerCount: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }

        if (value === 0) {
          alert("Time's up. SUBJECT FAILED. RESETTING ALL PROGRESS.")
          this.calculateScore()
        }

      },
      immediate: true
    }
  },

  mounted() {

    fetch('http://127.0.0.1:3030/addition')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.rawData = data.questions
        }).then(() => this.getFromServer())
  },

  methods: {

    goBack() {
      this.$router.replace({name: "achievements"});
    },


    startQuiz() {

      this.timerCount = 60;
      this.showQuiz = true;
      this.showStart = !this.showStart
      this.showSubmit = true;

    },

    calculateScore() {

      if (this.input.answer1 == "causality") {
        this.pass = true;
        this.message = "Congratulations! You've unlocked all achievements and completed every quiz. You should be proud!"
      } else {
        this.pass = false;
        this.chungus = true;
        this.message = "It appears you weren't ready after all. Go back to the beginning and practice some more!" +
            " All of your achievements and score will now RESET."
      }

      this.showSubmit = false;
      this.showScore = true;
      this.showQuiz = false;
      this.timerCount = "";

      if (this.pass) {
        this.addAchiPointsToStudent()
      } else {
        this.doomsDayDeletion()
      }

    },

    addAchiPointsToStudent() {

      let points = this.students.find(s => s.studentName === this.currentUser).studentAchiPoints;

      if (points === 4) {
        points++

        const axios = require('axios').default;
        axios.put('http://127.0.0.1:3030/students/achiPoints', {
          studentName: this.currentUser,
          studentAchiPoints: points
        })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      }
    },
    doomsDayDeletion() {
      const axios = require('axios').default;
      axios.put('http://127.0.0.1:3030/students/reset', {
        studentName: this.currentUser
      })
    },

    getFromServer() {
      fetch('http://127.0.0.1:3030/students')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.students = data.students;
          })
    }

  }
  ,
}


</script>

<style scoped src="../assets/css/hiddenQuiz.css">

</style>

