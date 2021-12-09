import appBoot from "boot/appBoot";

export default {
  methods: {
    async createDirectory(dirName) {
      try {
        await appBoot().post(this.currentDirId, { title: dirName });
        await this.$store.dispatch("directories/getSubDir");
      } catch (e) {
        await this.$store.dispatch(
          "inAppNotification/raiseAnError",
          e.response.data.message,
          { root: true }
        );
      }
    },
  },
};
