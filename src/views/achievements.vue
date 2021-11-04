<template>
  <div class="achievement" id="achievement">
    <h1>Achievements: </h1>

  </div>
</template>
<script>
export default {
  name: "achievements",
  data: function () {
    return {
      currentUser: this.$root.currentlyLoggedInUser,
      studentScore: 0,
      students: []
    }
  },
  mounted() {
    fetch('http://127.0.0.1:3030/students')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.rawData = data.students;
        });

  },
  methods: {
    showScoreForCurrentUser() {

      /*
      for (let i = 0; i < this.students.length; i++) {
        let obj = this.students[i].studentName;

        for (let j = 0; j < obj.length; j++) {
          if (obj === this.currentUser) {

          }
        }
      }
      */

    }

  }
}
</script>