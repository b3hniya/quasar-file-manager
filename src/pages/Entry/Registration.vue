<template>
  <q-page padding class="flex flex-center column" id="entry-page">
    <p id="entry-page-title"> Try this product out for free. </p>
    <register-comp />
  </q-page>
</template>

<script>
import RegisterComp from "components/RegisterComp";
export default {
  components: {RegisterComp}
}
</script>

<style lang="sass" scoped>
#entry-page
  background-color: #f1f1f1

#entry-page-title
  font-weight: 500
</style>
