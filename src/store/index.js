import Vue from "vue";
import Vuex from "vuex";
import directories from "./directories";
import createDirectory from "./createDirectory";
import inAppNotification from "./inAppNotification";
import applicationHeader from "./applicationHeader";
import loadingDialog from "./loadingDialog";

Vue.use(Vuex);

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      directories,
      createDirectory,
      inAppNotification,
      applicationHeader,
      loadingDialog
    },

    strict: process.env.DEBUGGING,
  });
}
