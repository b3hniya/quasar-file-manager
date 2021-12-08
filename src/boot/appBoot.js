import axios from "axios";
import { Cookies } from "quasar";

export default () => {
  return axios.create({
    baseURL: "https://spexa.tk/directory",
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });
};
