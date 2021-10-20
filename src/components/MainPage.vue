<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{slogan}}</h2>

  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String,
    slogan: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="../assets/css/mainPage.css"></style>