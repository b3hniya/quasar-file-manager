import Vue from "vue";
import Vuex from "vuex";
import directories from "./directories";
import inAppNotification from "./inAppNotification";
import applicationHeader from "./applicationHeader";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      directories,
      inAppNotification,
      applicationHeader,
    },

    strict: process.env.DEBUGGING,
  });
}
