import appBoot from "boot/appBoot";
import { getNewAccessToken } from "src/core/entryApiCaller";
import { Cookies } from "quasar";

export async function getSubDir(context) {
  if (context.state.currentDir.id === "") {
    context.commit("mutateCurrentDirName", "root");
    context.commit("mutateCurrentDirID", Cookies.get("root_dir_id"));
  }

  appBoot()
    .get(context.state.currentDir.id)
    .then((res) => {
      console.log(res.data);
      context.commit("mutateCurrentSubDirs", res.data.data.directories);
    })
    .catch((e) => {
      if (e.response.status === 401)
        getNewAccessToken().then(() => {
          this.$store.dispatch("getSubDir");
        });
      else {
        this.$store.commit("inAppNotification/componentDisplayMutation", true);
        this.$store.commit("inAppNotification/typeMutation", "error");
        this.$store.commit(
          "inAppNotification/messageMutation",
          e.response.data.message
        );
      }
    });
}
