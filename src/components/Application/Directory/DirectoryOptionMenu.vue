<template>
  <!-- TODO => add code for menu of directory -->
  <q-btn flat icon="more_horiz" id="more-icon">
    <q-menu anchor="bottom left">
      <q-list dense style="min-width: 100px">
        <q-item clickable  @click="changeDir">
          <q-item-section class="menu-item">
            <q-icon name="open_in_new" />
            <span class="q-mx-sm"> Open </span>
          </q-item-section>
        </q-item>
        <q-item clickable @click="deleteDirectory">
          <q-item-section class="menu-item">
            <q-icon name="delete" />
            <span class="q-mx-sm"> Delete </span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {
  name: "DirectoryOptionMenu",
  props: ["id", "name"],
  data: () => ({
    menu: false,
  }),
  methods: {
    deleteDirectory(){

    },
    changeDir() {
      this.$store.commit("directories/mutateCurrentDirID", this.id);
      this.$store.commit("directories/mutateCurrentDirName", this.name);
      this.$store.dispatch("directories/getSubDir");
    },
  },
};
</script>

<style scoped lang="sass">
.menu-item
  display: flex
  flex-direction: row
  align-items: center
  justify-content: start

#more-icon
  height: 28px
  width: 28px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 50%
  background-color: rgba(0, 0, 0, 0)
  transition: background-color 0.2s ease 0s
  position: absolute
  margin-left: 64px
  margin-top: -4px
  z-index: 1

  &:hover
    background-color: rgba(0, 0, 0, 0.1)
</style>
