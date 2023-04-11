import * as React from "react";
import { DragAndDrop } from "@bgroup/ui/drag-and-drop";

export /*bundle*/ function Form() {
  const [showFile, setShowFile] = React.useState(null);

  const handleSubtmi = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  function onUpload(e) {
    const file = e.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setShowFile(fileReader.result);
      console.log(fileReader.result);
    };

    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
  }
  const formats = ["png", "gif", "jpg", "jpeg"];
  return (
    <>
      <form
        action="/file"
        encType="multipart/form-data"
        className="form"
        method="post"
      >
        <div className="results-form">
          <input
            onChange={onUpload}
            type="file"
            name="avatar"
            className="result-file"
          />
        </div>
        <input
          type="submit"
          className="form__button-upload spaces"
          value="send"
        />
      </form>
    </>
  );
}
