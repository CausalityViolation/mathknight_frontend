<template>
  <body>
  <div>
    <h1>Level 3 - Multiplication</h1>
  </div>

  <div class="quiz" v-if="showQuiz">
    <form method="POST" id="quiz">

      <h1>Question 1</h1>

      <p>What is {{ randomQuestions[0].question }}?
      <p/>

      <div>
        <input type="text" name="Question 1 Answer" placeholder="Answer" v-model="input.answer1"/>
      </div>


      <h1>Question 2</h1>
      <p>What is {{ randomQuestions[1].question }}?
      <p/>

      <div>
        <input type="text" name="Question 2 Answer" placeholder="Answer" v-model="input.answer2"/>
      </div>


      <h1>Question 3</h1>
      <p>What is {{ randomQuestions[2].question }}?
      <p/>

      <div>
        <input type="text" name="Question 3 Answer" placeholder="Answer" v-model="input.answer3"/>
      </div>


      <h1>Question 4</h1>
      <p>What is {{ randomQuestions[3].question }}?
      <p/>

      <div>
        <input type="text" name="Question 4 Answer" placeholder="Answer" v-model="input.answer4"/>
      </div>


      <h1>Question 5</h1>
      <p>What is {{ randomQuestions[4].question }}?
      <p/>


      <div>
        <input type="text" name="Question 5 Answer" placeholder="Answer" v-model="input.answer5"/>
      </div>

    </form>
  </div>

  <br>
  <button type="button" name="backButton" v-on:click="goBack()">Back</button>
  <button type="button" name="startButton" v-on:click="startQuiz" v-if="showStart">START QUIZ</button>
  <button type="button" name="submitButton" v-if="showSubmit" v-on:click="calculateScore">Submit</button>

  <p v-if="showScore" id="score">Score:<br>
    {{ score }}
  </p>

  <p id="loggedInUser">Logged in as: <br>
    {{ currentUser }}
  </p>

  <p v-if="showQuiz">Time Left:
    {{ timerCount }}</p>

  </body>
</template>

<script>


export default {
  name: "Quiz",
  data: function () {
    return {

      currentUser: this.$root.currentlyLoggedInUser,
      score: 0,
      rawData: [],
      answers: [],
      students: [],
      achiPoints: 0,
      answeredQuestions: 0,
      wrongAnswers: 0,
      showQuiz: false,
      showStart: true,
      showSubmit: false,
      showScore: false,

      timerCount: "",

      input: {

        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: ""

      },

      randomQuestions: [],
      randomQuestionAnswers: []
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
          alert("Time's up! Auto-Submitting Score!")
          this.calculateScore()
        }

      },
      immediate: true
    }
  },

  mounted() {
    fetch('http://127.0.0.1:3030/multiplication')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.rawData = data.questions;
        }).then(() => this.getFromServer())

  },

  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },


    startQuiz() {

      this.timerCount = 60;
      this.showQuiz = !this.showQuiz
      this.showStart = !this.showStart
      this.showSubmit = true;

      let randomQuestion;

      for (let i = 0; i < 5; i++) {
        let random = Math.floor((Math.random() * this.rawData.length));

        randomQuestion = this.rawData[random];

        this.randomQuestions.push(randomQuestion);
      }

      for (let i = 0; i < this.randomQuestions.length; i++) {
        let obj = this.randomQuestions[i].answer
        this.randomQuestionAnswers.push(obj)
      }
    },

    calculateScore() {

      if (this.input.answer1 == this.randomQuestionAnswers[0]) {
        this.score++;
        this.answeredQuestions++;
      } else if (this.input.answer1 != this.randomQuestionAnswers[0] && this.input.answer1 != "") {
        this.wrongAnswers++
        this.answeredQuestions++;
      } else {
        this.wrongAnswers++
      }

      if (this.input.answer2 == this.randomQuestionAnswers[1]) {
        this.score++;
        this.answeredQuestions++;
      } else if (this.input.answer1 != this.randomQuestionAnswers[1] && this.input.answer2 != "") {
        this.wrongAnswers++
        this.answeredQuestions++;
      } else {
        this.wrongAnswers++
      }

      if (this.input.answer3 == this.randomQuestionAnswers[2]) {
        this.score++;
        this.answeredQuestions++;
      } else if (this.input.answer1 != this.randomQuestionAnswers[2] && this.input.answer3 != "") {
        this.wrongAnswers++
        this.answeredQuestions++;
      } else {
        this.wrongAnswers++
      }

      if (this.input.answer4 == this.randomQuestionAnswers[3]) {
        this.score++;
        this.answeredQuestions++;
      } else if (this.input.answer1 != this.randomQuestionAnswers[3] && this.input.answer4 != "") {
        this.wrongAnswers++
        this.answeredQuestions++;
      } else {
        this.wrongAnswers++
      }

      if (this.input.answer5 == this.randomQuestionAnswers[4]) {
        this.score++;
        this.answeredQuestions++;
      } else if (this.input.answer1 != this.randomQuestionAnswers[4] && this.input.answer5 != "") {
        this.wrongAnswers++
        this.answeredQuestions++;
      } else {
        this.wrongAnswers++
      }


      this.showSubmit = false;
      this.addPointsToStudent();
      this.addAnsQToStudent();
      this.addWrongAnsQToStudent();
      this.showScore = true;
      this.showQuiz = false;
      this.timerCount = "";

      if (this.score == 5) {
        this.addAchiPointsToStudent()
      }

    },

    addPointsToStudent() {

      const axios = require('axios').default;
      axios.put('http://127.0.0.1:3030/students', {
        studentName: this.currentUser,
        studentScore: this.score
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    addAchiPointsToStudent() {

      let points = this.students.find(s => s.studentName === this.currentUser).studentAchiPoints;

      if (points === 2) {
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

    addAnsQToStudent() {

      const axios = require('axios').default;
      axios.put('http://127.0.0.1:3030/students/achi', {
        studentName: this.currentUser,
        studentAnsQ: this.answeredQuestions
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    addWrongAnsQToStudent() {

      const axios = require('axios').default;
      axios.put('http://127.0.0.1:3030/students/wrong', {
        studentName: this.currentUser,
        studentWrongAns: this.wrongAnswers
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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
  },
}


</script>

<style scoped src="../assets/css/quiz.css">

</style>
