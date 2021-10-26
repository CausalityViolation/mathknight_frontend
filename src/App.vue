<template>
  <div id="app">
    <router-view @authenticated="setAuthenticated"/>
    <div id="nav">
      <router-link v-if="authenticated" to="/home">Main | </router-link>
      <router-link v-if="authenticated" to="/quiz">Quiz | </router-link>
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout();" replace>Log out</router-link>
    </div>

  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({name: "login"});
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
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
