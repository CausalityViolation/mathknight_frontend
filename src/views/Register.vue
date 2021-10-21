<template>
  <div id="login">
    <h1>Student Registration</h1>

    <form>
      <input type="text" name="username" v-model.lazy="newUser.username" placeholder="Username"/>
      <input type="password" name="password" v-model.lazy="newUser.password" placeholder="Password"/><br><br>
      <button type="button" name="signUpButton" v-on:click="submitForm()">Submit</button>
      <button type="button" name="backButton" v-on:click="returnToMain()">Back</button>
    </form>


    <div v-if="error">
      <p>{{ errorMsg }}</p>
    </div>

    <ul v-if="submitted">
      User Successfully Added
      <li v-for="user in registeredUsers" v-bind:key="user.username">
        Username:
        {{ user.username }}
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      submitted: false,
      error: false,
      errorMsg: "",
      registeredUsers: [],
      newUser: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    returnToMain() {
      this.$router.replace({name: "login"});
    },

    submitForm() {
      this.error = false;
      this.submitted = false;
      this.registeredUsers.splice(0);

      if (this.newUser.username.length < 3) {
        this.error = true;
        this.errorMsg = "Username must be longer than three(3) symbols."

      } else if (this.newUser.password.length <= 0) {
        this.error = true;
        this.errorMsg = "Password Required."

      } else {

        let tempUser = {username: this.newUser.username, password: this.newUser.password};
        this.submitted = true;

        this.registeredUsers.push(tempUser)

      }


    }


  }
}
</script>

<style scoped src="../assets/css/login.css"></style>