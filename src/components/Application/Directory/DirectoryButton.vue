<template>
  <div>
    <q-icon
      name="more_horiz"
      size="24px"
      id="more-icon"
    />

    <div class="flex items-center column" id="folder-btn">
      <q-icon @click="changeDir" name="folder" size="96px" />
      <span> {{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectoryButton",
  props: ["name", "id"],
  methods: {
    changeDir() {
      this.$store.commit("directories/mutateCurrentDirID", this.id);
      this.$store.commit("directories/mutateCurrentDirName", this.name);
      this.$store.dispatch("directories/getSubDir");
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
