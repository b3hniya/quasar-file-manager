<template>
  <div>
    <q-input
      outlined
      color="dark"
      v-model="email"
      type="text"
      data-test="email-field"
      class="q-mt-lg q-mb-md entry-fields"
      label="Email"
    />
    <q-input
      outlined
      color="dark"
      v-model="password"
      type="password"
      data-test="password-field"
      class="q-mt-md entry-fields"
      label="Password"
    />
    <q-btn
      @click="submit"
      data-test="submit-btn"
      class="q-px-xl q-my-md"
      color="dark"
      text-color="blue-1"
    >
      Register / Login
    </q-btn>
  </div>
</template>

<script>
import entryBoot from "../boot/entryBoot";
import { Cookies } from "quasar";

export default {
  name: "RegisterComp",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    async submit() {
      entryBoot()
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          Cookies.set("access_token", res.data.data.access_token, {
            expires: "1d",
          });
          Cookies.set("refresh_token", res.data.data.refresh_token, {
            expires: "1d",
          });
          Cookies.set("root_dir_id", res.data.data.root_directory_id, {
            expires: "1d",
          });
          this.$store.commit(
            "directories/mutateRootDirID",
            res.data.data.root_directory_id
          );

          this.$router.push("/app");

          this.email = "";
          this.password = "";
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
</script>

<style lang="sass" scoped>
.entry-fields
  border-radius: 8px
  background-color: #fff
</style>
