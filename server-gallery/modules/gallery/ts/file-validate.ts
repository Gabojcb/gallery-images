import { access, stat, constants } from "fs";

export /*bundle*/ function fileValidate(param) {
  access(param, constants.F_OK, (err) => {
    if (err) {
      console.error("El archivo no existe, error 404");
      return;
    }
    console.log("El archivo existe");
  });
}
