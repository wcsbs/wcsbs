import Parse from "parse";
import Toasted from "vue-toasted";
import Vue from "vue";

import {
  LOGIN,
  RESET_PASSWORD,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";

Vue.use(Toasted);

const state = {
  errors: null,
  user: {},
  isAuthenticated: false
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  isSystemAdmin(state) {
    if (!state.isAuthenticated) {
      return false;
    }
    return state.user.roles.some(role => role == "B4aAdminUser");
  },
  isClassAdmin(state) {
    if (!state.isAuthenticated) {
      return false;
    }
    return state.user.roles.some(role => role == "ClassAdminUser");
  },
  isTeachingAssistant(state) {
    if (!state.isAuthenticated) {
      return false;
    }
    return state.user.roles.some(role => role == "TeachingAssistantUser");
  },
  isStudent(state) {
    if (!state.isAuthenticated) {
      return false;
    }
    return state.user.roles.some(role => role == "StudentUser");
  }
};

var updateMenu = function() {
  const loggedInUser = Parse.User.current();

  const memberFunc = document.getElementById("member-func");
  const nonMemberFunc = document.getElementById("non-member-func");

  if (loggedInUser) {
    memberFunc.setAttribute("style", "display: block;");
    nonMemberFunc.setAttribute("style", "display: none;");
  } else {
    nonMemberFunc.setAttribute("style", "display: block;");
    memberFunc.setAttribute("style", "display: none;");
  }
};

const actions = {
  [LOGIN](context, credentials) {
    console.log(LOGIN);
    const username = credentials.email;
    const password = credentials.password;
    return new Promise(resolve => {
      Parse.User.logIn(username, password)
        .then(parseUser => {
          console.log(`user logged in: ${parseUser.id}`);
          resolve(parseUser);
        })
        .catch(e => {
          alert("登录失败！" + e.message);
          context.commit(SET_ERROR, e.errors);
        });
    });
  },
  [RESET_PASSWORD](context, credentials) {
    context.commit(PURGE_AUTH);
    return new Promise(resolve => {
      Parse.User.requestPasswordReset(credentials.email)
        .then(() => {
          alert(
            "请求成功！请登录您的电邮，根据电邮指示完成密码重置后，再来登录"
          );
          resolve();
        })
        .catch(e => {
          alert("重置密码失败！" + e.message);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    const name = credentials.ame;
    const email = credentials.email;
    const password = credentials.password;
    const phone = credentials.phone;

    return new Promise((resolve, reject) => {
      Parse.Cloud.run("user:signup", {
        name,
        email,
        password,
        phone
      })
        .then(({ data }) => {
          alert("用户注册成功！请确认您的电邮地址，再来登录");
          context.commit(PURGE_AUTH);
          resolve(data);
        })
        .catch(e => {
          alert("用户注册失败！" + e.message);
          context.commit(SET_ERROR, e.errors);
          reject(e);
        });
    });
  },
  [CHECK_AUTH](context) {
    console.log(
      `${CHECK_AUTH}: ${state.user.id} roles: ${state.user.roles} ${
        Parse.User.current() ? Parse.User.current().id : "no logged in user"
      }`
    );
    const currentUser = Parse.User.current();
    if (currentUser && (!state.user || state.user.id != currentUser.id)) {
      return new Promise(resolve => {
        console.log(`loading user details: ${currentUser.id}`);
        Parse.Cloud.run("user:getRoles", {})
          .then(user => {
            console.log(`loaded user details: ${JSON.stringify(user)}`);
            context.commit(SET_AUTH, user);
            resolve(user);
          })
          .catch(e => {
            console.log(`error loading user details: ${e.message}`);
            context.commit(SET_ERROR, e.errors);
          });
      });
    }
    if (!currentUser && !state.user && state.user.id) {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    var loggedInUser = Parse.User.current();
    if (payload.password) {
      loggedInUser.set("password", payload.password);
    }
    loggedInUser.set("name", payload.name);
    loggedInUser.set("phone", payload.phone);
    return new Promise(resolve => {
      loggedInUser
        .save()
        .then(parseUser => {
          Vue.toasted.show("更新成功！", { icon: "check", duration: 5000 });
          resolve(parseUser);
        })
        .catch(e => {
          Vue.toasted.error(`更新失败！${e.message}`, { duration: 5000 });
          console.log(`error updating user: ${JSON.stringify(e)}`);
            context.commit(SET_ERROR, e.errors);
        });
    });
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    console.log(SET_AUTH);
    updateMenu();
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    console.log(PURGE_AUTH);
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    if (Parse.User.current()) {
      Parse.User.logOut().then(() => {
        updateMenu();
        console.log("user logged out");
      });
    }
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};