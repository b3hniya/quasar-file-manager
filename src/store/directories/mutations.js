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

export function mutateDirs(state, dir) {
  let flag = false;
  state.dirs.forEach((el) => {
    if (el.id === dir.id) flag = true;
  });
  if (flag === false) state.dirs.push(dir);
}

export function removeDir(state, dir) {
  for (let i = 0; i < state.dirs.length; i++) {
    if (state.dirs[i].id === dir.id) {
      state.dirs.splice(i + 1, state.dirs.length - 1);
      break;
    }
  }
}
