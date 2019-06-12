<template>
  <div class="home">
    <Header></Header>
    <img alt="Vue logo" src="@/assets/logo.png" class="logo">
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
