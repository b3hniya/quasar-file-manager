<template>
  <q-banner
    inline-actions
    id="in-app-notification"
    :class="classes"
    rounded
    style=""
  >
    {{ message }}
    <template v-slot:action>
      <q-btn flat color="white" label="Close" @click="closeBanner" />
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "InAppNotification",
  methods: {
    closeBanner() {
      this.$store.commit("inAppNotification/componentDisplayMutation", false);
    },
  },
  computed: {
    message() {
      return this.$store.state.inAppNotification.message;
    },

    componentDisplay() {
      return this.$store.state.inAppNotification.displayBar;
    },

    color() {
      if (this.$store.state.inAppNotification.type === "error") return "bg-red";
      return "bg-dark";
    },

    classes() {
      return `text-white ${this.color} transition-anim ${
        this.componentDisplay ? "transition-anim-on" : ""
      }`;
    },
  },
};
</script>

<style lang="sass" scoped>
#in-app-notification
  transition: all 500ms


.transition-anim
  left: -100%
  bottom: 32px
  position: fixed
  transition: all 1s ease 0s

.transition-anim-on
  left: 50%
  transform: translateX(-50%)
</style>
