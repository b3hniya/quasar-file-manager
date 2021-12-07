import Vue from "vue";
import Vuex from "vuex";
import directories from "./directories";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      directories,
    },

    strict: process.env.DEBUGGING,
  });
}
