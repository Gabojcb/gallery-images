import * as path from "path";
import { readFolders } from "server-gallery/gallery";
export /*bundle*/ function routes(app) {
  app.get("/gallery", async (req, res) => {
    const imageFiles = await readFolders("./images", []);

    const newImageFile = imageFiles.map((item) => {
      return item.replace(/\\/g, "/");
    });

    res.send(`${__dirname}${newImageFile}`);
  });

  app.get("/images", async (req, res) => {
    const imageFiles = await readFolders("./images", []);
    const { path } = req.params;
    const { id } = req.query;
    console.log(__dirname);
    const route = ` ${__dirname}/ball-4.jpg`;
    console.log(route);
    /* res.send(`${path} el id de la imagen es ${id}`); */
    res.sendFile(__dirname + " " + route);
  });
}

// expresion regular para cambiar backSlash por slash : /[\\\\](?![^{]*})/
