<template>
  <div class="home" id="home">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <img alt="Vue logo" class="logo-home" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/mainPage";

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>

<style scoped>
.logo-home{
  max-width: 100%;
  height: auto;
}
</style>
