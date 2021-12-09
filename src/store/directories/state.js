import { Cookies } from "quasar";
const rootId = Cookies.get("root_dir_id");

export default function () {
  return {
    currentDir: {
      id: "",
      name: "",
      subDirs: [""],
      isEmpty() {
        return this.subDirs.length === 0;
      },
    },

    dirs: [{ name: "Home", id: rootId }],
  };
}
