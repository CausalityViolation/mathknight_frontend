<template>
  <div id="app">
    <router-view/>
    <div id="nav" v-if="this.$route.path === '/home' || this.$route.path === '/quiz'">
      <router-link to="/home">Main |</router-link>
      <router-link to="/quiz">Quiz |</router-link>
      <router-link to="/login">Log out</router-link>
    </div>

  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
