import * as React from "react";

export /*bundle*/ function Form() {
  const handleSubtmi = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubtmi}>
        <h2 className="form__h2">Unload an image</h2>
        <input
          type="text"
          className="form__input-name spaces"
          placeholder="name of file"
        />
        <input className="form__button-upload spaces" multiple type="file" />
        <button onClick={handleClick} className="form__button-upload spaces">
          Upload
        </button>
      </form>
    </>
  );
}
