import * as React from "react";

export /*bundle*/ function Form() {
  const [files, setFiles] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", files);

    try {
      const response = await fetch("http://localhost:5000/file", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  function onUpload(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      setFiles(file);
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
        onSubmit={handleSubmit}
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
