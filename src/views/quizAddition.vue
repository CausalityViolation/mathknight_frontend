<template>
  <body>
  <div>
    <h1>Level 1 - Addition</h1>
  </div>

  <div class="quiz" v-if="showQuiz">
    <form method="POST" id="quiz">


      <h1>Question 1</h1>

      <p>What is {{ randomQuestions[0].question }}?<p/>

      <div>
        <input type="text" name="Question 1 Answer" placeholder="Answer"/>
      </div>


      <h1>Question 2</h1>
      <p>What is {{ randomQuestions[1].question }}?<p/>



      <div>
        <input type="text" name="Question 2 Answer" placeholder="Answer"/>
      </div>


      <h1>Question 3</h1>
      <p>What is {{ randomQuestions[2].question }}?<p/>



      <div>
        <input type="text" name="Question 3 Answer" placeholder="Answer"/>
      </div>


      <h1>Question 4</h1>
      <p>What is {{ randomQuestions[3].question }}?<p/>



      <div>
        <input type="text" name="Question 4 Answer" placeholder="Answer"/>
      </div>


      <h1>Question 5</h1>
      <p>What is {{ randomQuestions[4].question }}?<p/>


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
      showQuiz: false,
      showStart: true,

      randomQuestions: [],
      randomQuestionAnswers: []
    }
  },

  mounted() {
    fetch('http://127.0.0.1:3030/addition')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.rawData = data.questions;
        });

  },

  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },


    startQuiz() {

      this.showQuiz = !this.showQuiz
      this.showStart = !this.showStart

      let randomQuestion;

      for (let i = 0; i < 5; i++) {
        let random = Math.floor((Math.random() * this.rawData.length));

        randomQuestion = this.rawData[random];

        this.randomQuestions.push(randomQuestion);
      }

      for (let i = 0; i <this.randomQuestions.length ; i++) {
        let obj = this.randomQuestions[i].answer
        this.randomQuestionAnswers.push(obj)
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

ul {
  list-style-type: none;
  padding: 0;
  margin: auto;
}

</style>
