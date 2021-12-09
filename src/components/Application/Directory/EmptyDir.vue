<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
  >
    <q-icon name="inventory" size="128px"></q-icon>
    <div class="text-h6 q-mt-md">There is nothing to show.</div>
    <q-btn
      flat
      class="bg-dark text-white text-weight-light q-px-xl q-py-xs q-mt-lg"
      @click="openCreateDirectoryPopup"
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

<style scoped></style>
