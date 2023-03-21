import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      auth: false,
      usersList: [{
        "_id": {
          "$oid": "640de167a0fc8d4c0c930242"
        },
        "name": "Автомонов Андрей",
        "location": [
          37.582107,55.894369
        ],
        "imageUrl": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
        "_class": "com.brk.CarShare.Entities.Vehicle"
      },
      {
        "_id": {
          "$oid": "640de167a0fc8d4c0c930242"
        },
        "name": "Леонель Месси",
        "location": [
          37.72107,55.894369
        ],
        "imageUrl": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social",
        "_class": "com.brk.CarShare.Entities.Vehicle"
      }
      ],
      eventsList: [{
        "name": "Футбол 5X5",
        "location": [
          37.382107,55.494369
        ],
      },
      {
        "name": "Футбол 6X6",
        "location": [
          37.82107,55.694369
        ],
      }
      ],
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