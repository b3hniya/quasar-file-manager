import { Cookies } from "quasar";

export function setAccessTokenCookie(token) {
  Cookies.set("access_token", token, {
    expires: "1d",
  });
}

export function setRefreshTokenCookie(token) {
  Cookies.set("refresh_token", token, {
    expires: "1d",
  });
}

export function setRootDirIdCookie(id) {
  Cookies.set("root_dir_id", id, {
    expires: "1d",
  });
}

export function setEmailAddressCookie(email) {
  Cookies.set("email", email, {
    expires: "1d",
  });
}
