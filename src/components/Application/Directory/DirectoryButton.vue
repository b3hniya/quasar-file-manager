<template>
  <div @click="changeDir">
    <q-icon name="folder"></q-icon>
    <span> {{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DirectoryButton",
  props: ["name", 'id'],
  methods: {
    changeDir(){
      this.$store.commit("directories/mutateCurrentDirID", this.id);
      this.$store.commit("directories/mutateCurrentDirName", this.name);
      this.$store.dispatch("directories/getSubDir")
    }
  }
};
</script>

<style scoped></style>
