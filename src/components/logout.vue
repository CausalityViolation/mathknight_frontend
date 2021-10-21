<template>

  <button @click="logOut">Log Out</button>

</template>

<script>

export default {
  methods: {
    logOut() {
      return this.$router.replace("Login");
    }
  }
}

</script>
