import { readFolders } from "server-gallery/gallery";
import { access, constants, promises as fs } from "fs";
import { join } from "path";
import * as multer from "multer";

/* const upload = Multer({
  dest: "server-gallery/images",
}); */

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });

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

  app.post("/file", upload.single("avatar"), async (req, res) => {
    res.send("todo bien");
  });
}
