<template>
  <q-page
    padding
    style="background-color: #f1f1f1; padding: 64px"
    :class="qPageClass"
  >
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

      <create-directory-button />
    </template>

    <delete-directory-pop-up />
    <create-directory-pop-up />
  </q-page>
</template>

<script>
import EmptyDirectory from "components/Application/Directory/EmptyDirectory";
import DirectoryButton from "components/Application/Directory/DirectoryButton";
import CreateDirectoryButton from "components/Application/Directory/CreateDirectoryButton";
import DeleteDirectoryPopUp from "components/Application/Directory/DeleteDirectoryPopUp";
import CreateDirectoryPopUp from "components/Application/Directory/CreateDirectoryPopUp";

export default {
  components: {
    CreateDirectoryPopUp,
    DeleteDirectoryPopUp,
    CreateDirectoryButton,
    DirectoryButton,
    EmptyDirectory,
  },
  data: () => ({
    prompt: false,
  }),

  mounted() {
    this.$store.dispatch("directories/getSubDir");
  },

  computed: {
    qPageClass() {
      if (this.currentDir.isEmpty()) return "flex flex-center";
      return "flex";
    },
    currentDir() {
      return this.$store.state.directories.currentDir;
    },
  },
};
</script>
