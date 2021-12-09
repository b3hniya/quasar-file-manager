export default {
  methods: {
    changeDirectory(name, id, flag) {
      this.$store.commit("directories/mutateCurrentDirID", id);
      this.$store.commit("directories/mutateCurrentDirName", name);
      this.$store.dispatch("directories/getSubDir");

      if (flag === "remove") {
        this.$store.commit("directories/removeDir", {
          name: name,
          id: id,
        });
      }

      if(flag === "change")
      {
        this.$store.commit("directories/mutateDirs", {
          name: this.name,
          id: this.id,
        });
      }
    },
  },
};
