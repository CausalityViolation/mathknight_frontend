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


  <p v-if="!hideName" id="loggedInUser">Logged in as: <br>
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
      hideName: false,
      timerCount: "",
      message: "",
      pass: "",
      audio: new Audio(require("../assets/hiddenTheme.mp3")),
      jaws: new Audio(require("../assets/jaws.mp3")),
      victory: new Audio(require("../assets/fanfare.mp3")),
      fail: new Audio(require("../assets/fail.mp3")),

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

        if (value <= 50) {
          document.getElementById("timer").style.fontSize = "30px";
        }

        if (value <= 40) {
          document.getElementById("timer").style.fontSize = "35px";
        }

        if (value <= 30) {
          document.getElementById("timer").style.fontSize = "40px";
        }

        if (value <= 20) {
          document.getElementById("timer").style.fontSize = "45px";
        }

        if (value <= 10) {
          document.getElementById("timer").style.fontSize = "60px";
          document.getElementById("timer").style.color = "red";
        }

        if (value <= 9) {
          document.getElementById("timer").style.color = "white";
        }
        if (value <= 8) {
          document.getElementById("timer").style.color = "red";
        }
        if (value <= 7) {
          document.getElementById("timer").style.color = "white";
        }
        if (value <= 6) {
          document.getElementById("timer").style.color = "red";
        }
        if (value <= 5) {
          document.getElementById("timer").style.color = "white";
        }
        if (value <= 4) {
          document.getElementById("timer").style.color = "red";
        }
        if (value <= 3) {
          document.getElementById("timer").style.color = "white";
        }
        if (value <= 2) {
          document.getElementById("timer").style.color = "red";
        }
        if (value <= 1) {
          document.getElementById("timer").style.color = "white";
        }
        if (value === 0) {
          this.calculateScore()
        }

      },
      immediate: true
    }
  },

  mounted() {
    this.getFromServer()
    this.jaws.volume = 0.5
    this.jaws.play()
  },

  methods: {

    goBack() {
      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()
      this.$router.replace({name: "achievements"});
      this.fail.pause()
      this.jaws.pause()
      this.$root.theme.play()
    },


    startQuiz() {

      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()

      this.jaws.pause();
      this.timerCount = 60;
      this.showQuiz = true;
      this.showStart = !this.showStart
      this.showSubmit = true;
      this.audio.volume = 0.1
      this.audio.play();

    },

    calculateScore() {

      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()

      document.getElementById("timer").style.fontSize = "20px";
      document.getElementById("loggedInUser").style.fontSize = "20px";
      this.audio.pause()

      if (this.input.answer1 == "causality") {
        this.pass = true;
        this.hideName = true;
        this.message = "Congratulations! You've unlocked all achievements and completed every quiz. You should be proud!"
      } else {
        this.pass = false;
        this.chungus = true;
        this.hideName = true;
        this.message = "It appears you weren't ready after all. Go back to the beginning and practice some more!" +
            " All of your achievements and score will now RESET."
      }

      this.showSubmit = false;
      this.showScore = true;
      this.showQuiz = false;
      this.timerCount = "";

      if (this.pass) {
        this.addAchiPointsToStudent()
        this.victory.volume = 0.1
        this.victory.play()
      } else {
        this.doomsDayDeletion()
        this.fail.volume = 0.1
        this.fail.play()
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

