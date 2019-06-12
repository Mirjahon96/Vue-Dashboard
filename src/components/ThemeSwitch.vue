<template>
  <div
    v-on:click="toggleDarkMode()"
    class="toggle"
    v-bind:class="{'light-toggle' : !darkMode, 'dark-toggle' : darkMode}"
  >
    <div
      class="toggle-switch"
      v-bind:class="{'toggle-left' : !darkMode, 'toggle-right' : darkMode}"
    >
      <img v-if="darkMode" src="@/assets/moon.svg">
      <img v-if="!darkMode" src="@/assets/sun.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",

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
.toggle {
  border-radius: 10px;
  width: 175px;
  display: flex;
  box-sizing: border-box;
  margin: 50px auto 30px auto;
}

.light-toggle {
  background: linear-gradient(346, 78deg, #f7fcfc 0%, #fafcfa);
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  border-radius: 8px;
  padding: 15px 35px;
  margin: 2px;
}

.toggle-left {
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(0);
}

.toggle-right {
  background: #1b233f;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(90%);
}
</style>
