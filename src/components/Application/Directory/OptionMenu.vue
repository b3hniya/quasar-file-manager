<template>
  <!-- TODO => add code for menu of directory -->
  <div>
    <q-btn flat icon="more_horiz" id="more-icon">
      <q-menu anchor="bottom left">
        <q-list dense style="min-width: 100px">
          <q-item clickable @click="changeDir">
            <q-item-section class="menu-item flex-start">
              <q-icon name="open_in_new" />
              <span class="q-mx-sm"> Open </span>
            </q-item-section>
          </q-item>
          <q-item clickable @click="openDeletePopUp">
            <q-item-section class="menu-item">
              <q-icon name="delete" />
              <span class="q-mx-sm"> Delete </span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-dialog v-model="deleteDialog" persistent>
      <q-card
        style="min-width: 350px"
        flat
        class="bg-grey-3"
        id="create-dir-card"
      >
        <q-card-section>
          <div class="text-h6">Delete Directory</div>
          <div class="q-mt-md">
            Are you sure you want to delete
            <strong>{{ name }}</strong> directory ?
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-mt-md">
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
            label="Delete"
            class="bg-dark text-white text-weight-light q-px-xl flex flex-center"
            style="text-transform: none; height: 32px"
            @click="deleteDir"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import changeDirectory from "../../../mixins/changeDirectory.mixin";

export default {
  name: "OptionMenu",
  props: ["id", "name"],
  mixins: [changeDirectory],
  data: () => ({
    menu: false,
    deleteDialog: false,
  }),
  methods: {
    openDeletePopUp() {
      this.deleteDialog = true;
    },
    changeDir() {
      this.changeDirectory(this.name, this.id, "change");

      this.deleteDialog = false;
    },
    async deleteDir() {
      this.deleteDialog = false;
      await this.$store.dispatch("directories/deleteDir", this.id);
    },
  },
};
</script>

<style scoped lang="sass">
.menu-item
  display: flex
  flex-direction: row
  align-items: center

#more-icon
  z-index: 1
  width: 28px
  height: 28px
  display: flex
  margin-top: -4px
  margin-left: 64px
  border-radius: 50%
  position: absolute
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.2s ease 0s

  &:hover
    background-color: rgba(0, 0, 0, 0.1)
</style>
