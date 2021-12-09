export default {
  methods: {
    changeDirectory(name, id) {
      this.$store.commit("directories/mutateCurrentDirID", id);
      this.$store.commit("directories/mutateCurrentDirName", name);
      this.$store.dispatch("directories/getSubDir");
      this.$store.commit("directories/removeDir", {
        name: name,
        id: id,
      });
    },
  },
};
