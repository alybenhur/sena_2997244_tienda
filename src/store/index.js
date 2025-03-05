import { createStore } from 'vuex';

// Crear el almacén
export const store = createStore({
  state() {
    return {
      count: 8, // Ejemplo de estado
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
});