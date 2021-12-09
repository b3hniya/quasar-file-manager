import entryBoot from "boot/entryBoot";
import * as cookieSetter from "src/core/cookieSetter";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    flushFields() {
      this.email = "";
      this.password = "";
    },
    async submit() {
      entryBoot()
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          cookieSetter.setEmailAddressCookie(this.email);
          cookieSetter.setAccessTokenCookie(res.data.data.access_token);
          cookieSetter.setRefreshTokenCookie(res.data.data.refresh_token);
          cookieSetter.setRootDirIdCookie(res.data.data.root_directory_id);

          this.$store.commit(
            "directories/mutateCurrentDirID",
            res.data.data.root_directory_id
          );

          this.$store.commit("applicationHeader/emailMutation", this.email);
          this.$router.push("/app");
          this.flushFields();
        })
        .catch((e) => {
          this.$store.commit(
            "inAppNotification/componentDisplayMutation",
            true
          );
          this.$store.commit(
            "inAppNotification/messageMutation",
            e.response.data.message
          );
          this.$store.commit("inAppNotification/typeMutation", "error");
        });
    },
  },
};
