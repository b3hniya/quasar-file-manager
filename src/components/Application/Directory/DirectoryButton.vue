<template>
  <div>
    //TODO => change current dir and triggers new subdir fetches.
    <q-icon name="folder"></q-icon>
    <span> {{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DirectoryButton",
  props: ["name"],
};
</script>

<style scoped></style>
