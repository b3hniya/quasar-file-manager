<template>
  <div id="empty-dir-container">
    <q-icon name="inventory" size="128px" />
    <div class="text-h6 q-mt-md">There is nothing to show.</div>
    <q-btn
      flat
      @click="openCreateDirectoryPopup"
      class="bg-dark text-white text-weight-light q-px-xl q-py-xs q-mt-lg"
    >
      Create Directory
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "EmptyDir",
  methods: {
    openCreateDirectoryPopup() {
      this.$store.commit("createDirectory/promptMutation", true);
    },
  },
};
</script>

<style scoped lang="sass">
#empty-dir-container
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
</style>
