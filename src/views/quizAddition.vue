<template>
  <body>
  <div>
    <h1>Level 1 - Addition</h1>
  </div>

  <div class="quiz"  v-if="showQuiz">
    <form method="POST" id="quiz">


          <h1>Question 1</h1>
          <p>What is the sum of 367 and 34?</p>
          <div>
            <input type="text" name="Question 1 Answer" placeholder="Answer"/>
          </div>



          <h1>Question 2</h1>
          <p>What is the sum of 1054 and 802?</p>

          <div>
            <input type="text" name="Question 2 Answer" placeholder="Answer"/>
          </div>



          <h1>Question 3</h1>
          <p>What is the sum of 926 and 92?</p>

          <div>
            <input type="text" name="Question 3 Answer" placeholder="Answer"/>
          </div>



          <h1>Question 4</h1>
          <p>What is the sum of 999 and 999?</p>

          <div>
            <input type="text" name="Question 4 Answer" placeholder="Answer"/>
          </div>



          <h1>Question 5</h1>
          <p>What is the sum of 541 and 96?</p>

          <div>
            <input type="text" name="Question 5 Answer" placeholder="Answer"/>
          </div>

    </form>
  </div>

  <br>
  <button type="button" name="backButton" v-on:click="goBack()">Back</button>
  <button type="button" name="backButton" v-on:click="startQuiz" v-if="showStart">START QUIZ</button>

  </body>
</template>

<script>


export default {
  name: "Quiz",
  data: function () {
    return {
      score: 0,
      rawData: [],
      answers: [],
      questions: [],
      showQuiz: false,
      showStart: true
    }
  },

  mounted() {
    fetch('http://127.0.0.1:3030/addition/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.rawData = data.rawData;
        });
  },

  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },


    startQuiz() {

      this.showQuiz = !this.showQuiz
      this.showStart = !this.showStart

      for (let i = 0; i <this.rawData.length ; i++) {
        let obj = this.rawData[i];
        this.answers.push(obj.answer)
      }

      for (let i = 0; i <this.rawData.length ; i++) {
        let obj = this.rawData[i];
        this.questions.push(obj.question)
      }

    }

  }
}


</script>

<style scoped>

body {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.quiz {
  text-align: center;
}

h1 {
  font-family: 'MedievalSharp', cursive;
}

.submitButton {
  width: auto;
  height: 2rem;
  margin: 0 0 2rem 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
}

</style>
