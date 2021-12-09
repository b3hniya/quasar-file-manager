<template>
  <q-page padding class="flex flex-center column" id="entry-page">
    <p id="entry-page-title"> Try this product out for free. </p>
    <register-fields />
  </q-page>
</template>

<script>
import RegisterFields from "components/Entry/RegisterFields";
export default {
  components: {RegisterFields}
}
</script>

<style lang="sass" scoped>
#entry-page
  background-color: #f1f1f1

#entry-page-title
  font-weight: 500
</style>
