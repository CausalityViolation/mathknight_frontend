<template>
  <div class="home" id="home">
    <MainPage msg="MATH KNIGHT"/>
    <MainPage slogan="Math made fun!"/>
    <img alt="Vue logo" class="logo-home" src="../assets/logo.png">

    <p id="loggedInUser">Logged in as: <br>
      {{ currentUser }}
    </p>

  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/mainPage";

export default {
  data() {
    return {
      currentUser: this.$root.currentlyLoggedInUser
    }
  },
  name: 'Home',
  components: {
    MainPage
  }
}
</script>

<style scoped>
.logo-home {
  max-width: 100%;
  height: auto;
}

p{
  font-family: 'MedievalSharp', cursive;
  text-shadow: black 0 0 10px;
  font-size: 20px;
}

@media (min-width: 768px) {

  #loggedInUser{
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
}
</style>
