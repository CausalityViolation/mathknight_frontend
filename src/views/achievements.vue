<template>
  <div class="achievement" id="achievement">
    <h1>{{ currentUser }}'s Achievements:</h1>
    <p>{{ currentUser }}'s total score: {{ studentScore }} </p>
    <button type="button" name="back" v-on:click="goBack()">Back</button>
  </div>
</template>

<script>


export default {
  name: "achievements",
  data: function () {
    return {
      currentUser: this.$root.currentlyLoggedInUser,
      studentScore: 0,
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
        .then(() => this.showScoreForCurrentUser())

  },
  methods: {

    goBack() {
      this.$router.replace({name: "quiz"});
    },

    showScoreForCurrentUser() {


      let currentScore = this.students.find(x => x.studentName === this.currentUser).studentScore

      console.log(currentScore)
      this.studentScore = currentScore;

    }

  }
}
</script>
