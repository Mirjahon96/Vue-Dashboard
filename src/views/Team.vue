<template>
  <div class="container">
    <h2 v-bind:class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Team</h2>
    <div class="cards">
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-1" v-bind:class="{'light-card': !darkMode, 'dark-card' : darkMode}">
          <img
            src="@/assets/slack.png"
            alt
            class="card-header"
            :class="{'light-header' : !darkMode, 'dark-header' : darkMode}"
          >
          <h3 :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Slack</h3>
          <p
            :class="{'light-text' : darkMode, 'dark-text' : !darkMode}"
          >Messaging app for all team communication</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-2" v-bind:class="{'light-card': !darkMode, 'dark-card' : darkMode}">
          <img
            src="@/assets/notion.png"
            alt
            class="card-header"
            :class="{'light-header' : !darkMode, 'dark-header' : darkMode}"
          >
          <h3 :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Notion</h3>
          <p :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">All-in-one workplace</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-3" v-bind:class="{'light-card': !darkMode, 'dark-card' : darkMode}">
          <img
            src="@/assets/figma.png"
            alt
            class="card-header"
            :class="{'light-header' : !darkMode, 'dark-header' : darkMode}"
          >
          <h3 :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Figma</h3>
          <p :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Colloborative design tool</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-4" v-bind:class="{'light-card': !darkMode, 'dark-card' : darkMode}">
          <img
            src="@/assets/contentful.png"
            alt
            class="card-header"
            :class="{'light-header' : !darkMode, 'dark-header' : darkMode}"
          >
          <h3 :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Contentful</h3>
          <p :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Content management system</p>
        </a>
      </transition>
      <transition appear appear-active-class="animated flipInX">
        <a class="card card-5" v-bind:class="{'light-card': !darkMode, 'dark-card' : darkMode}">
          <img
            src="@/assets/dropbox.png"
            alt
            class="card-header"
            :class="{'light-header' : !darkMode, 'dark-header' : darkMode}"
          >
          <h3 :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Dropbox</h3>
          <p :class="{'light-text' : darkMode, 'dark-text' : !darkMode}">Storage space in the cloud</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
// import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Team",
  // components: ThemeSwitch,
  data() {
    return {};
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
<style lang="scss" scoped>
.container {
  margin: 25px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  margin-top: 0;
}

.cards {
  display: flex;
  justify-content: flex-start;
  align-items: space-evenly;
  flex-wrap: wrap;
}
.card {
  width: 100%;
  max-width: 380px;
  height: 400px;
  border-radius: 18px;
  margin: 20px;
}
.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-header {
  background: $light-grey;
}

.dark-header {
  background: #283049;
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
  margin-bottom: 1rem;
}
</style>
