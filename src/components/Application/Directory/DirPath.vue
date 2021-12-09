<template>
  <div>
    <q-breadcrumbs align="left">
      <q-breadcrumbs-el
        v-for="(dir, index) in dirs"
        :key="index"
        :label="dir.name"
        @click="changeDirectory(dir.name, dir.id, 'remove')"
        class="path-link"
      />
    </q-breadcrumbs>
  </div>
</template>

<script>
import changeDirectory from "../../../mixins/changeDirectory.mixin";

export default {
  name: "DirPath",
  mixins: [changeDirectory],
  computed: {
    dirs() {
      return this.$store.state.directories.dirs;
    },
  },
};
</script>

<style scoped lang="sass">
.path-link
  &:hover
    cursor: pointer
</style>
