<template>
  <q-dialog v-model="loadingModel" persistent>
    <q-card flat style="background-color: rgba(0, 0, 0, 0)">
      <q-circular-progress
        indeterminate
        size="50px"
        color="dark"
        class="q-ma-md"
      />

      <q-card-section class="q-pt-none text-white"> Loading...</q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "LoadingDialog",
  computed: {
    loadingModel: {
      get() {
        return this.$store.state.loadingDialog.loadingModel;
      },
      set(val) {
        this.$store.commit("loadingDialog/mutateLoadingModel", val);
      },
    },
  },
};
</script>

<style scoped></style>
