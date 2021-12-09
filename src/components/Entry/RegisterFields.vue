<template>
  <div>
    <q-input
      outlined
      color="dark"
      v-model="email"
      type="text"
      data-test="email-field"
      class="q-mt-lg q-mb-md entry-fields"
      label="Email"
    />
    <q-input
      outlined
      color="dark"
      v-model="password"
      type="password"
      data-test="password-field"
      class="q-mt-md entry-fields"
      label="Password"
    />
    <q-btn
      @click="submit"
      data-test="submit-btn"
      class="q-px-xl q-my-md"
      color="dark"
      text-color="blue-1"
    >
      Register / Login
    </q-btn>
  </div>
</template>

<script>
import register from "./register.mixin";

export default {
  mixins: [register],
  name: "RegisterFields",
};
</script>

<style lang="sass" scoped>
.entry-fields
  border-radius: 8px
  background-color: #fff
</style>
