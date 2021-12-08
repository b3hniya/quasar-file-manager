<template>
  <q-page padding style="background-color: #f1f1f1" :class="qPageClass">
    <template v-if="dir.isEmpty()">
      <empty-directory />
    </template>

    <template v-else>
      <directory-button
        v-for="(dir, index) in dir.subDirs"
        :key="index"
        :name="dir.title"
      />
    </template>

    <create-directory />
  </q-page>
</template>

<script>
import { Cookies } from "quasar";
import appBoot from "boot/appBoot";
import EmptyDirectory from "components/Application/Directory/EmptyDirectory";
import CreateDirectory from "components/Application/Directory/CreateDirectoryPopUp";
import DirectoryButton from "components/Application/Directory/DirectoryButton";
import { getNewAccessToken } from "src/core/entryApiCaller";

export default {
  components: { DirectoryButton, CreateDirectory, EmptyDirectory },
  data: () => ({
    dir: {
      subDirs: [""],
      isEmpty() {
        return this.subDirs.length === 0;
      },
    },

    prompt: false,
  }),
  methods: {
    getSubDirs(dirId) {
      appBoot()
        .get(dirId)
        .then((res) => {
          this.dir.subDirs = res.data.data.directories;
        })
        .catch((e) => {
          if (e.response.status === 401)
            getNewAccessToken().then(() => {
              this.getSubDirs(dirId);
            });
          else console.log(e);
        });
    },
  },

  mounted() {
    this.getSubDirs(Cookies.get("root_dir_id"));
  },

  computed: {
    qPageClass() {
      if (this.dir.isEmpty()) return "flex flex-center";
      else return "";
    },
  },
};
</script>
