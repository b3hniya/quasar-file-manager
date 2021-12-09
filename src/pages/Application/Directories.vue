<template>
  <q-page
    padding
    style="background-color: #f1f1f1; padding: 64px"
    :class="qPageClass"
  >
    <dir-path style="position: fixed; top: 64px; left: 64px" />

    <template v-if="currentDir.isEmpty()">
      <EmptyDir />
    </template>

    <template v-else>
      <folder-button
        v-for="(dir, index) in currentDir.subDirs"
        :key="index"
        :id="dir.id"
        :name="dir.title"
      />

      <add-button />
    </template>

    <delete-pop-up />
    <create-pop-up />
    <loading-dialog />
  </q-page>
</template>

<script>
import EmptyDir from "components/Application/Directory/EmptyDir";
import FolderButton from "components/Application/Directory/FolderButton";
import AddButton from "components/Application/Directory/AddButton";
import DeletePopUp from "components/Application/Directory/DeletePopUp";
import CreatePopUp from "components/Application/Directory/CreatePopUp";
import DirPath from "components/Application/Directory/DirPath";
import LoadingDialog from "components/LoadingDialog";

export default {
  components: {
    LoadingDialog,
    DirPath,
    CreatePopUp,
    DeletePopUp,
    AddButton,
    FolderButton,
    EmptyDir,
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
