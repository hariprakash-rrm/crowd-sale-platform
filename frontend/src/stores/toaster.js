import {createUUID} from '@/helpers/helper.js';

const state = {
  toasters: [],
  fixedToaster: {show: false},
  getToasterPosition: null
};

// create getters for all state variables
const getters = {
  getToasters: (state, getters, rootState) => state.toasters,
  getToasterPosition: (state, getters, rootState) => state.getToasterPosition,
  getFixedToasters: (state, getters, rootState) => state.fixedToaster,
};

// actions
const actions = {
  clearAllToast({state, commit, rootState, dispatch, getters}) {
    commit('UPDATE_TOASTER', []);
  },
  showToast({state, commit, rootState, dispatch, getters}, payload) {
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
    {state, commit, rootState, dispatch, getters},
    removeId,
  ) {
    let {getToasters} = getters;
    commit(
      'UPDATE_TOASTER',
      getToasters.filter(val => val.id != removeId),
    );
  },

  showFixedToast({state, commit, rootState, dispatch, getters}, payload) {
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

  hideFixedToast({state, commit, rootState, dispatch, getters}) { 
    let {getFixedToasters} = getters;   
    commit('HIDE_FIXED_TOASTER');
  },
};

// mutations
const mutations = {
  ['SET_TOASTER'](state, payload) {
    state.toasters = state.toasters.concat(payload);
  },
  ['SET_TOASTER_POSITION'](state, payload) {
    state.getToasterPosition = payload;
  },
  ['UPDATE_TOASTER'](state, toaster) {
    state.toasters = toaster;
  },
  ['SHOW_FIXED_TOASTER'](state, payload) {
    state.fixedToaster = { show: true, ...payload }
  },
  ['HIDE_FIXED_TOASTER'](state) {
    state.fixedToaster = { show: false }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
