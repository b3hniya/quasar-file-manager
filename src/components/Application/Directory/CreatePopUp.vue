<template>
  <q-dialog v-model="prompt" persistent>
    <q-card
      style="min-width: 350px"
      flat
      class="bg-grey-3"
      id="create-dir-card"
    >
      <q-card-section>
        <div class="text-h6">Create Directory</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-mt-sm">
        <q-input
          dense
          outlined
          autofocus
          label="title"
          v-model="dirName"
          class="text-dark q-mx-md"
          style="background-color: #fff"
          @keyup.enter="createDirectory"
        />
      </q-card-section>

      <q-card-actions align="center" class="text-primary q-mt-md">
        <q-btn
          outline
          color="dark"
          label="Cancel"
          v-close-popup
          id="cancel-btn"
          class="q-px-lg flex flex-center"
        />
        <q-btn
          flat
          v-close-popup
          label="Create"
          id="create-btn"
          @click="create"
          class="bg-dark text-white text-weight-light q-px-xl flex flex-center"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "CreatePopUp",
  data: () => ({
    dirName: "",
  }),

  methods: {
    async create() {
      await this.$store.dispatch("directories/createDir", this.dirName);

      this.prompt = false;
      this.dirName = "";
    },
  },
  computed: {
    currentDirId() {
      return this.$store.state.directories.currentDir.id;
    },

    prompt: {
      get() {
        return this.$store.state.createDirectory.prompt;
      },
      set(val) {
        this.$store.commit("createDirectory/promptMutation", val);
      },
    },
  },
};
</script>

<style scoped lang="sass">
#create-btn
  text-transform: none
  height: 32px

#cancel-btn
  height: 32px
  text-transform: none
</style>
