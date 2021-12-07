<template>
  <div id="q-app">
    <router-view />
    <in-app-notification />
  </div>
</template>
<script>
import InAppNotification from "components/InAppNotification";

export default {
  name: "App",
  components: { InAppNotification },
};
</script>
