import * as React from "react";
import { DragAndDrop } from "@bgroup/ui/drag-and-drop";

export /*bundle*/ function Form() {
  const handleSubtmi = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  function onUpload(files: File[]): void {}
  const formats = ["png", "gif", "jpg", "jpeg"];
  return (
    <>
      <form className="form" onSubmit={handleSubtmi}>
        <div className="results-form">
          <DragAndDrop onUpload={onUpload} count={5} formats={formats} />
        </div>
        <button onClick={handleClick} className="form__button-upload spaces">
          Upload
        </button>
      </form>
    </>
  );
}
