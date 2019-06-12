import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Initial State

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  window.localStorage.setItem('darkMode', 'true');
}
const userSelectedDarkMode = window.localStorage.getItem('darkMode') === 'true';

const state = {
  darkMode: userSelectedDarkMode
};

// Getters
const getters = {
  darkMode(state) {
    return state.darkMode;
  }
};

// Mutaions
const mutations = {
  toggleDarkMode(state) {
    if (state.darkMode === true) {
      state.darkMode = false;
      window.localStorage.setItem('darkMode', 'false');
    } else {
      state.darkMode = true;
      window.localStorage.setItem('darkMode', 'true');
    }
  }
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
