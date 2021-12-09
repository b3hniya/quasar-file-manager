import { getNewAccessToken } from "src/core/entryApiCaller";
import Index from "../../router/index";
import appBoot from "boot/appBoot";
import { Cookies } from "quasar";

export async function getSubDir(context) {
  if (context.state.currentDir.id === "") {
    context.commit("mutateCurrentDirName", "root");
    context.commit("mutateCurrentDirID", Cookies.get("root_dir_id"));
  }
  try {
    const res = await appBoot().get(context.state.currentDir.id);
    context.commit("mutateCurrentSubDirs", res.data.data.directories);
  } catch (e) {
    if (e.response.data.message === "jwt expired") {
      try {
        await getNewAccessToken();
        await context.dispatch("getSubDir");
        context.commit("mutateCurrentDirID", "");
      } catch (e) {
        context.dispatch(
          "inAppNotification/raiseAnError",
          e.response.data.message,
          { root: true }
        );
        Index().go(-1);
      }
    } else {
      context.dispatch(
        "inAppNotification/raiseAnError",
        e.response.data.message,
        { root: true }
      );
      Index().go(-1);
    }
  }

  // appBoot()
  //   .get(context.state.currentDir.id)
  //   .then((res) => {
  //     console.log(res.data);
  //     context.commit("mutateCurrentSubDirs", res.data.data.directories);
  //   })
  //   .catch((e) => {
  //     if (e.response.data.message === "jwt expired") {
  //       getNewAccessToken().then(() => {
  //         context.commit("mutateCurrentDirID", "");
  //         context.dispatch("getSubDir");
  //       });
  //     }
  //     else {
  //       this.$store.commit("inAppNotification/componentDisplayMutation", true);
  //       this.$store.commit("inAppNotification/typeMutation", "error");
  //       this.$store.commit(
  //         "inAppNotification/messageMutation",
  //         e.response.data.message
  //       );
  //     }
  //   });
}
