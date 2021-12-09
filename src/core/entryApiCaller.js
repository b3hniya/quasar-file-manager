import entryBoot from "boot/entryBoot";
import { Cookies } from "quasar";
import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
} from "src/core/cookieSetter";

export async function getNewAccessToken() {
  entryBoot()
    .post("/refresh", {
      refresh_token: Cookies.get("refresh_token"),
    })
    .then((res) => {
      setRefreshTokenCookie(res.data.data.refresh_token);
      setAccessTokenCookie(res.data.data.access_token);
    })
    .catch((e) => {
      console.log(e)
    });
}
