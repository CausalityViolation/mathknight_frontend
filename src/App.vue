<template>
  <div id="app">
    <router-view/>
    <div id="nav" v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">
      <button v-on:click="goToHome">Main</button>
      <button v-on:click="goToQuiz"> Quiz</button>
      <button v-on:click="stopMusic"> Log out </button>
    </div>

    <div v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">

    </div>

  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
    let root = this.login || '/login'
    this.$router.push({path: root, query: {name: 'guest'}});
  },

  methods: {
    stopMusic() {
      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()
      this.$root.theme.pause()
      this.$router.replace({name: "login"});
    },

    goToQuiz() {
      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()
      this.$router.replace({name: "quiz"});
    },
    goToHome() {
      this.$root.buttonSound.volume = 0.2
      this.$root.buttonSound.play()
      this.$router.replace({name: "home"});
    }
  }
}
</script>


<style>

body {
  background: linear-gradient(#1F1C2C, #69667a) no-repeat center;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
}

#nav {
  /* position: fixed; */
  bottom: 0;
  width: 30%;
  height: auto;
  overflow-x: auto;
  font-family: 'MedievalSharp', cursive;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #69667a;
  background-color: #1F1C2C;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 35px auto 0 auto;
  box-shadow: 0 10px 14px -7px black;


}

#nav:focus {
  outline: none;
}

#nav.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

#nav:hover {
  cursor: pointer;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
}

button {
  font-family: 'MedievalSharp', cursive;
  border-radius: 20px;
  border: 1px solid darkgreen;
  background-color: forestgreen;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 20px 10px 0 0;
  width: 300px;
  height: 100px;
  box-shadow: 0 10px 14px -7px black;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #FFFFFF;
}

button:hover {
  cursor: pointer;
}

@media (min-width: 1025px) {

  #nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    order: 3;
    justify-content: space-evenly;
  }

  button {
    width: 200px;
    height: 100px;
    margin: auto 5px auto 5px;
  }
}

@media (max-width: 1024px) {

  #nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    order: 3;
    justify-content: space-evenly;
    width: auto;
  }

  button {
    width: auto;
    height: auto;
    font-size: 20px;
    margin: auto 5px auto 5px;
  }

}


</style>
