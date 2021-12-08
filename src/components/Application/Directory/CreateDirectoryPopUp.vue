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
          class="text-dark q-mx-md"
          v-model="dirName"
          autofocus
          @keyup.enter="prompt = false"
          label="title"
          style="background-color: #fff"
        />
      </q-card-section>

      <q-card-actions align="center" class="text-primary q-mt-md">
        <q-btn
          label="Cancel"
          outline
          color="dark"
          class="q-px-lg flex flex-center"
          style="text-transform: none; height: 32px"
          v-close-popup
        />
        <q-btn
          flat
          label="Create"
          class="bg-dark text-white text-weight-light q-px-xl flex flex-center"
          style="text-transform: none; height: 32px"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "CreateDirectory",
  data: () => ({
    dirName: "",
  }),

  methods: {
    //TODO => add calling api feature to this component.
    createDirectory(dirId) {
      // appBoot()
      //   .post(Cookies.get("root_dir_id"), {
      //     title: "b",
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .then(() => {
      //     appBoot()
      //       .get(Cookies.get("root_dir_id"))
      //       .then((res) => {
      //         console.log(res.data);
      //       });
      //   });
    },
  },
  computed: {
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

<style scoped lang="sass"></style>
