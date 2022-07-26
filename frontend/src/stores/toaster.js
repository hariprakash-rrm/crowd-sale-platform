import { createUUID } from '@/helpers/helper.js';
import { defineStore } from "pinia";

export const useToasterStore = defineStore("toasterStore", {
  state: () => ({
    toasters: [],
    fixedToaster: { show: false },
    getToasterPosition: null
  }),

  // create getters for all state variables
  getters: {
    getToasters: (state, getters, rootState) => state.toasters,
    getToasterPosition: (state, getters, rootState) => state.getToasterPosition,
    getFixedToasters: (state, getters, rootState) => state.fixedToaster,
  },

  // actions
  actions: {
    clearAllToast({ state, commit, rootState, dispatch, getters }) {
      commit('UPDATE_TOASTER', []);
    },
    showToast({ state, commit, rootState, dispatch, getters }, payload) {
      let id = createUUID();
      payload['id'] = id;
      let autohide = payload['autohide'] || 5000;
      if (!payload['class']) {
        payload['class'] = 'bg-info text-white';
      }
      if (!payload['message']) {
        payload['message'] = 'Please add Message!';
      }
      if (!payload['position']) {
        payload['position'] = 'bottom-right';
      }
      commit('SET_TOASTER', payload);
      commit('SET_TOASTER_POSITION', payload.position);

      setTimeout(() => {
        dispatch('removeToastBasedOnId', id);
      }, autohide);
    },
    removeToastBasedOnId(
      { state, commit, rootState, dispatch, getters },
      removeId,
    ) {
      let { getToasters } = getters;
      commit(
        'UPDATE_TOASTER',
        getToasters.filter(val => val.id != removeId),
      );
    },

    showFixedToast({ state, commit, rootState, dispatch, getters }, payload) {
      let id = createUUID();
      payload['id'] = id;
      if (!payload['class']) {
        payload['class'] = 'bg-info text-white';
      }
      if (!payload['message']) {
        payload['message'] = 'Please add Message!';
      }
      commit('SHOW_FIXED_TOASTER', payload);
    },

    hideFixedToast({ state, commit, rootState, dispatch, getters }) {
      let { getFixedToasters } = getters;
      commit('HIDE_FIXED_TOASTER');
    },
  }
});