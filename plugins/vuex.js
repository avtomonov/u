import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      auth: false,
      user: {
        name: ''
      }
    };
  },
  mutations: {
    authTrue(state) {
      state.auth = true;
    },
    setUserName(state) {
      state.user.name = state;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});