import { fileValidate } from "serve-gallery/gallery";
import { readFolders } from "server-gallery/gallery";
import { access, constants } from "fs";

export /*bundle*/ function routes(app) {
  app.get("/gallery", async (req, res) => {
    const imageFiles = await readFolders("./images", []);
    const newImageFile = imageFiles.map((item) => {
      const path = item.replace(
        "E://workspace//gallery-images-project/server-gallery",
        ""
      );
      return path.replace(/\\/g, "/");
    });
    res.send(newImageFile);
  });

  app.get("/images", async (req, res) => {
    const imageFiles = await readFolders("./images", []);
    const { image } = req.query;
    const route = "E://workspace//gallery-images-project/server-gallery/";

    const { path } = req.param;
    access(image, constants.F_OK, (err) => {
      if (err) {
        console.error("El archivo no existe, error 404");
        return;
      }
      const routeComplet = path.join(route, image);
      res.sendFile(routeComplet);
    });
  });
}

/*   const result = fileValidate(image); */
/* let myUrl = "localHost:5000/images?image=images/balls/ball-1.png"; */
/* http://localhost:5000/images?image=images/balls/ball-1.png */
