import * as React from "react";

export /* bundle */ function ItemImages({ url }) {
  const src = `http://localhost:5000/images?url=${url}`;

  return (
    <div className="item-img">
      <img
        src={src}
        alt={`esta es la imagen con url ${url}`}
        className="item"
      />
    </div>
  );
}
