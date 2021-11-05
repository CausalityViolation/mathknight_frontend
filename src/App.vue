<template>
  <div id="app">
    <router-view/>
    <div id="nav" v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">
      <router-link to="/home">Main |</router-link>
      <router-link to="/quiz"> Quiz |</router-link>
      <router-link to="/login"> Log out</router-link>
    </div>

  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted () {
    let root = this.login || '/login'
    this.$router.push({ path: root, query: { name: 'guest' } });
  }
}
</script>


<style>

body{
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
  width: 50%;
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

#nav:active{
  transform: scale(0.95);
}

#nav:focus{
  outline: none;
}

#nav.ghost{
  background-color: transparent;
  border-color: #FFFFFF;
}
#nav:hover{
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


</style>
