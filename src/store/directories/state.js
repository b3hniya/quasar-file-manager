export default function () {
  return {
    currentDir: {
      id: "",
      name: "",
      subDirs: [""],
      isEmpty() {
        return this.subDirs.length === 0;
      },
    }
  }
}
