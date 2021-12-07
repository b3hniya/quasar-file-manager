<template>
  <q-page padding style="background-color: #f1f1f1" class="flex flex-center">
    <!--  TODO => directory path should be shown in the application  -->

    <!--  TODO => if root dir was empty then show empty folder component.   -->

    <empty-directory />

    <!--  TODO => else show all roots in the application.  -->
    <!--    <h1>THIS IS DIRS</h1>-->
  </q-page>
</template>

<script>
import EmptyDirectory from "components/EmptyDirectory";

export default {
  components: { EmptyDirectory },

  // name: 'PageName',
};
</script>
