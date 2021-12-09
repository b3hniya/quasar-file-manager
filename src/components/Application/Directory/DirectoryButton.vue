<template>
  <div>
    <q-icon name="more_horiz" size="24px" id="more-icon" />

    <div class="flex items-center column" id="folder-btn">
      <q-icon @click="changeDir" name="folder" size="96px" />
      <span> {{ name }}</span>
    </div>
  </div>
</template>

<script>
import doubleClickHandler from "src/core/doubleClickHandler";

export default {
  name: "DirectoryButton",
  props: ["name", "id"],
  methods: {
    changeDir() {
      doubleClickHandler(
        (context) => {
          context.store.commit("directories/mutateCurrentDirID", context.id);
          context.store.commit(
            "directories/mutateCurrentDirName",
            context.name
          );
          context.store.dispatch("directories/getSubDir");
        },
        { store: this.$store, id: this.id, name: this.name }
      );
    },
  },
};
</script>

<style lang="sass" scoped>
#more-icon
  border-radius: 50%
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.2s ease 0s
  position: absolute
  margin-left: 64px
  z-index: 1

  &:hover
    background-color: rgba(0, 0, 0, 0.1)


#folder-btn
  max-height: 128px
  border-radius: 8px
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.2s ease 0s

  &:hover
    background-color: rgba(0, 0, 0, 0.1)
</style>
