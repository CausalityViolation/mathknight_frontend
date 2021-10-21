<template>
  <div class="home" id="home">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <img alt="Vue logo" src="../assets/logo.png">
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

