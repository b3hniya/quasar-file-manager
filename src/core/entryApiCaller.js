import entryBoot from "boot/entryBoot";
import { Cookies } from "quasar";
import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
} from "src/core/cookieSetter";
import Index from "src/router";

export async function getNewAccessToken(context) {
  try {
    await entryBoot().post("/refresh", {
      refresh_token: Cookies.get("refresh_token"),
    });
    setRefreshTokenCookie(res.data.data.refresh_token);
    setAccessTokenCookie(res.data.data.access_token);
  } catch (e) {
    context.dispatch(
      "inAppNotification/raiseAnError",
      e.response.data.message,
      { root: true }
    );
    // Index().go(-1);
  }
}
