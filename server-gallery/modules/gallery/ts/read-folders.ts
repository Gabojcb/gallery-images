//your code here\
import { promises, readFile, stat } from "fs";
import * as path from "path";

export /*bundle*/ async function readFolders(pathFolder, imageFiles) {
  const stats = await promises.stat(pathFolder);
  if (stats.isDirectory()) {
    const files = await promises.readdir(pathFolder);
    for (const file of files) {
      const subPathName = path.join(pathFolder, file);
      await readFolders(subPathName, imageFiles);
    }
  } else if (stats.isFile()) {
    const extension = path.extname(pathFolder).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".gif"].includes(extension)) {
      imageFiles.push(pathFolder);
    }
  }
  return imageFiles;
}
