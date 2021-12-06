<template>
  <q-layout>
    <application-header/>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import ApplicationHeader from "components/ApplicationHeader";

export default {
  name: 'ApplicationLayout',
  components: {ApplicationHeader},
}
</script>
