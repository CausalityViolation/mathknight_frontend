<template>
  <div class="home">
    <MainPage msg="WELCOME TO MATH KNIGHT"/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage";

export default {
  name: 'Home',
  components: {
    MainPage
  }
}
</script>
