<template>
  <div>
    <option-menu :id="id" :name="name" />
    <div class="flex items-center column" id="folder-btn">
      <q-icon @click="changeDir" name="folder" size="96px" />
      <span> {{ name }}</span>
    </div>
  </div>
</template>

<script>
import doubleClickHandler from "src/core/doubleClickHandler";
import OptionMenu from "components/Application/Directory/OptionMenu";

export default {
  name: "FolderButton",
  components: { OptionMenu },
  props: ["name", "id"],
  data: () => ({
    test: true,
  }),
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
          context.store.commit("directories/mutateDirs", {
            name: context.name,
            id: context.id
          });
        },
        { store: this.$store, id: this.id, name: this.name }
      );
    },
  },
};
</script>

<style lang="sass" scoped>


#folder-btn
  max-height: 128px
  border-radius: 8px
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.2s ease 0s

  &:hover
    background-color: rgba(0, 0, 0, 0.1)
</style>
