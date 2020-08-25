import Parse from "parse";
import Toasted from "vue-toasted";
import Vue from "vue";
import { FETCH_USERS } from "./actions.type";
import { UPDATE_USER_BY_ADMIN, ADMIN_FETCH_USER } from "./actions.type";
import {
  FETCH_USERS_START,
  FETCH_USERS_END,
  SET_USER,
  UPDATE_USER_IN_LIST
} from "./mutations.type";

Vue.use(Toasted);

const state = {
  user: {},
  users: [],
  isLoadingUsers: true,
  usersCount: 0
};

const getters = {
  user(state) {
    return state.user;
  },
  usersCount(state) {
    return state.usersCount;
  },
  users(state) {
    return state.users;
  },
  isLoadingUsers(state) {
    return state.isLoadingUsers;
  }
};

const actions = {
  [FETCH_USERS]({ commit }, params) {
    console.log(`${FETCH_USERS} - params: ${JSON.stringify(params)}`);
    commit(FETCH_USERS_START);
    Parse.Cloud.run("user:list", {})
      .then(users => {
        console.log(`${FETCH_USERS} - user: ${JSON.stringify(users)}`);
        commit(FETCH_USERS_END, users);
      })
      .catch(e => {
        console.log(`error loading user list: ${e.message}`);
        throw new Error(e);
      });
  },
  [ADMIN_FETCH_USER](context, userSlug) {
    console.log(`${ADMIN_FETCH_USER} - userSlug: ${userSlug}`);
    const adminFetchUser = "user:adminFetchUser";
    Parse.Cloud.run(adminFetchUser, { userSlug })
      .then(user => {
        console.log(`${ADMIN_FETCH_USER} - user: ${JSON.stringify(user)}`);
        context.commit(SET_USER, user);
      })
      .catch(e => {
        console.log(`error loading user: ${e.message}`);
        throw new Error(e);
      });
  },
  [UPDATE_USER_BY_ADMIN](context, user) {
    console.log(`${UPDATE_USER_BY_ADMIN} - user: ${JSON.stringify(user)}`);
    const adminUpdateUser = "user:adminUpdateUser";
    Parse.Cloud.run(adminUpdateUser, { user })
      .then(user => {
        context.commit(SET_USER, user);
        context.commit(UPDATE_USER_IN_LIST, user);
        Vue.toasted.show("更新成功！", { icon: "check", duration: 5000 });
      })
      .catch(e => {
        Vue.toasted.error(`更新失败！${e.message}`, { duration: 5000 });
        console.log(`error updating user: ${e.message}`);
        throw new Error(e);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [SET_USER](state, user) {
    state.user = user;
  },
  [FETCH_USERS_START](state) {
    state.isLoadingUsers = true;
  },
  [FETCH_USERS_END](state, { users, usersCount }) {
    state.users = users;
    state.usersCount = usersCount;
    state.isLoadingUsers = false;
  },
  [UPDATE_USER_IN_LIST](state, data) {
    state.users = state.users.map(user => {
      return user.slug !== data.slug ? user : data;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};