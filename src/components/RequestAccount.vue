<template>
  <transition name="slide-in-right" enter-active-class="animated slideInRight">
    <div
      v-if="show"
      class="request"
      :class="{'light-request' : darkMode,
     'dark-request' : !darkMode}"
    >
      Don't have an Epicweb account?
      <router-link to="/request">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },

  computed: {
    darkMode() {
      return this.$store.getters.darkMode;
    }
  }
};
</script>

<style scoped lang="scss">
.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);

  a {
    color: #fff;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}
</style>
