<template>
  <div id="app">
    <router-view/>
    <div id="nav" v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">
      <router-link to="/home">Main</router-link>
      |
      <router-link to="/quiz"> Quiz</router-link>
    </div>

    <div v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">
      <button id="logoutButton" v-on:click="stopMusic"> Log out</button>
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
      this.$root.theme.pause()
      this.$router.replace({name: "login"});

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
  height: 35px;
  overflow-x: auto;
  font-family: 'MedievalSharp', cursive;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid forestgreen;
  background-color: forestgreen;
  color: #FFFFFF;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: auto;
  margin-bottom: 0;
  box-shadow: 0 10px 14px -7px black;


}

#nav:active {
  transform: scale(0.95);
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
  border-radius: 20px;
  border: 1px solid forestgreen;
  background-color: forestgreen;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  margin: 0 10px 0 0;
  width: 300px;
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

#logoutButton {
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
  height: 80px;
  font-size: 20px;
  font-family: 'MedievalSharp', cursive;
}


</style>
