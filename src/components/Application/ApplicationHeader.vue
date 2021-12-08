<template>
  <q-header dense>
    <q-toolbar dense class="bg-white text-dark">
      <q-btn class="q-px-md" id="logout-btn" @click="logout"> Logout </q-btn>
      <q-toolbar-title class="text-weight-light"> {{ email }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
<script>
import { Cookies } from "quasar";

export default {
  name: "application-header",
  methods: {
    logout() {
      Cookies.remove("root_dir_id");
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      this.$router.push("/entry");
    },
  },
  computed: {
    email() {
      return this.$store.state.applicationHeader.email;
    },
  },
};
</script>
<style lang="sass" scoped>
#logout-btn
  height: 32px
  display: flex
  border-radius: 4px
  align-items: center
  border: 2px solid #000
  justify-content: center
</style>
