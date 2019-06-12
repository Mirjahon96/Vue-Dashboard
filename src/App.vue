<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const darkMode = this.$store.getters.darkMode;
    document.body.style.background = darkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>


<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  // background: $dark-blue;
  margin: 0;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo {
  width: 50%;
  // width: 280px;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: #fff;
  padding: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;

  font-size: 20px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 40px;
  cursor: pointer;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  text-decoration: none;
}

// Darkmode colors
.light-text {
  color: $white;
}

.dark-text {
  color: $black !important;
}

.light-background {
  background-color: $light-grey;
}
.dark-background {
  background-color: $dark-blue;
}

.light-field {
  color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
