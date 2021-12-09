import appBoot from "boot/appBoot";

export default {
  methods: {
    async deleteDirectory(id) {
      try {
        await appBoot().delete(id);
        await this.$store.dispatch("directories/getSubDir");
      } catch (e) {
        await this.$store.dispatch(
          "inAppNotification/raiseAnError",
          e.response.data.message,
          { root: true }
        );

        this.$router.go(-1);
      }
    },
  },
};
