<template>
  <div>
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el
        v-for="(dir, index) in dirs"
        :key="index"
        :label="dir.name"
        @click="changeDirectory(dir.name, dir.id, true)"
        class="path-link"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "DirPath",
  computed: {
    dirs() {
      return this.$store.state.directories.dirs;
    },
  },
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
</script>

<style scoped lang="sass">
.path-link
  &:hover
    cursor: pointer
</style>
