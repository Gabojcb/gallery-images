import { readFolders } from "server-gallery/gallery";
import { access, constants, promises as fs } from "fs";
import { join } from "path";

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
}

/* let myUrl = "localHost:5000/images?image=images/balls/ball-1.png"; */
/* http://localhost:5000/images?image=images/balls/ball-1.png */
