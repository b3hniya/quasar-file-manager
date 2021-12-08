export function mutateCurrentDirID(state, id) {
  state.currentDir.id = id;
}

export function mutateCurrentSubDirs(state, subDirs) {
  state.currentDir.subDirs = [];
  state.currentDir.subDirs.push(...subDirs);
}

export function mutateCurrentDirName(state, name) {
  state.currentDir.name = name;
}
