<template>
  <div
    class="container"
    v-bind:class="{'light-background' : !darkMode, 'dark-background' : darkMode}"
  >
    <RequestAccount></RequestAccount>
    <div class="login">
      <img src="@/assets/logo.png" class="logo">
      <h4 v-bind:class="{ 'light-text' : darkMode, 'dark-text' : !darkMode }">Sign into Epicweb</h4>
      <input
        type="email"
        placeholder="Email"
        required
        v-bind:class="{'light-field' : darkMode, 'dark-field' : !darkMode}"
      >
      <input
        type="password"
        placeholder="Password"
        required
        v-bind:class="{'light-field' : darkMode, 'dark-field' : !darkMode}"
      >
      <button type="button">Sign In</button>
      <router-link
        to="/recover"
        :class="{'light-link' : darkMode, 'dark-mode' : !darkMode}"
      >Forget your password?</router-link>
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}

.login {
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
  width: 480px;
}

h4 {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>