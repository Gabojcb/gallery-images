import { readFolders } from "server-gallery/gallery";
import { access, constants, rename, promises as fs } from "fs";
import { join } from "path";
import { Formidable } from "formidable";

const path = join(__dirname, "images/");
const form = new Formidable({
  multiples: true,
  uploadDir: path,
});

async function chekFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

export /*bundle*/ function routes(app) {
  app.get("/gallery", async (req, res) => {
    const imageFiles = await readFolders("./images", []);
    const newImageFile = imageFiles.map((item) => {
      const path = item.replace(__dirname, "");
      return path.replace(/\\/g, "/");
    });
    res.send(newImageFile);
  });

  app.get("/images", async (req, res) => {
    const { url } = req.query;
    const finalPath = join(__dirname, url);
    if (!(await chekFileExists(finalPath))) {
      res.send(`does not exist ${finalPath}`);
      return;
    }
    res.sendFile(finalPath);
  });

  app.post("/file", async (req, res, next) => {
    form.parse(req, async (err, fields, files) => {
      const nameFile = files.file.originalFilename;
      const subPath = join(path, nameFile);
      await fs.rename(files.file.filepath, subPath);
      if (err) {
        next(err);
        return;
      }
      res.json({ fields, files });
    });
  });
}
