import { getNewAccessToken } from "src/core/entryApiCaller";
import Index from "../../router/index";
import appBoot from "boot/appBoot";
import { Cookies } from "quasar";

export function changeCurrentDirectoryToRoot(context) {
  context.commit("mutateCurrentDirName", "root");
  context.commit("mutateCurrentDirID", Cookies.get("root_dir_id"));
}

export async function getSubDir(context) {
  //if current dir id was empty try to change it to root id.
  if (context.state.currentDir.id === "") {
    await context.dispatch("changeCurrentDirectoryToRoot");
  }

  //Server Call
  await context.dispatch(
    "directories/serverCall",
    {
      async callBack(context) {
        //Gets current Directory data and pass it to the store
        const res = await appBoot().get(context.state.currentDir.id);
        context.commit("mutateCurrentSubDirs", res.data.data.directories);
      },
      data: {
        actionName: "directories/getSubDir",
        actionData: undefined,
      },
    },
    { root: true }
  );
}

export async function deleteDir(context, id) {
  await context.dispatch(
    "directories/serverCall",
    {
      async callBack(context) {
        await appBoot().delete(id);
        await context.dispatch("directories/getSubDir", undefined, {
          root: true,
        });
      },
      data: {
        actionName: "directories/deleteDir",
        actionData: id,
      },
    },
    { root: true }
  );
}

export async function createDir(context, dirName) {
  await context.dispatch(
    "directories/serverCall",
    {
      async callBack(context) {
        await appBoot().post(context.state.currentDir.id, { title: dirName });
        await context.dispatch("directories/getSubDir", undefined, {
          root: true,
        });
      },
      data: {
        actionName: "directories/createDir",
        actionData: dirName,
      },
    },
    { root: true }
  );
}

export async function serverCall(context, call) {
  context.commit("loadingDialog/mutateLoadingModel", true, { root: true });

  try {
    await call.callBack(context);
  } catch (e) {
    if (e.response.data.message === "jwt expired") {
      await context.dispatch(
        "directories/tryAgainToDispatch",
        { name: "directories/serverCall", data: call },
        { root: true }
      );
    } else {
      //else throw new error and redirect to entry page to registering again.
      await context.dispatch(
        "inAppNotification/raiseAnError",
        e.response.data.message,
        { root: true }
      );
      Index().go(-1);
    }
  }

  context.commit("loadingDialog/mutateLoadingModel", false, { root: true });
}

export async function tryAgainToDispatch(context, action) {
  try {
    const res = await getNewAccessToken();
    if (res.status === 200) {
      await context.dispatch(action.name, action.data, { root: true });
      context.commit("mutateCurrentDirID", "");
    }
  } catch (e) {
    //if can't get new jwt, change the root to entry page and threw a new error.
    await context.dispatch(
      "inAppNotification/raiseAnError",
      e.response.data.message,
      { root: true }
    );
    Index().go(-1);
  }
}
