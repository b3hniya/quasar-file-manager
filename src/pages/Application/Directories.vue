<template>
  <q-page padding style="background-color: #f1f1f1" :class="qPageClass">
    <template v-if="currentDir.isEmpty()">
      <empty-directory />
    </template>

    <template v-else>
      <directory-button
        v-for="(dir, index) in currentDir.subDirs"
        :key="index"
        :id="dir.id"
        :name="dir.title"
      />
    </template>

    <create-directory />
  </q-page>
</template>

<script>
import EmptyDirectory from "components/Application/Directory/EmptyDirectory";
import CreateDirectory from "components/Application/Directory/CreateDirectoryPopUp";
import DirectoryButton from "components/Application/Directory/DirectoryButton";

export default {
  components: { DirectoryButton, CreateDirectory, EmptyDirectory },
  data: () => ({
    prompt: false,
  }),

  mounted() {
    this.$store.dispatch("directories/getSubDir");
  },

  computed: {
    qPageClass() {
      if (this.currentDir.isEmpty()) return "flex flex-center";
      else return "";
    },
    currentDir() {
      return this.$store.state.directories.currentDir;
    },
  },
};
</script>
