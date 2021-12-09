<template>
  <div id="add-dir-icon-btn" @click="addNewDir">
    <q-icon name="add" size="64px" />
  </div>
</template>

<script>
export default {
  name: "CreateDirectoryButton",
  methods: {
    addNewDir() {
      this.$store.commit("createDirectory/promptMutation", true);
    },
  },
};
</script>

<style scoped lang="sass">
#add-dir-icon-btn
  display: flex
  height: 100px
  width: 100px
  border-radius: 8px
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.5s ease 0s

  &:hover
    background-color: rgba(0, 0, 0, 0.1)
</style>
