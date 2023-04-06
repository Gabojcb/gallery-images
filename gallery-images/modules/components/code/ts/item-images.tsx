import * as React from "react";
import { ImageModal } from "./image-modal";

export /* bundle */ function ItemImages({ url }) {
  const [showModal, setShowModal] = React.useState(false);
  const src = `http://localhost:5000/images?url=${url}`;

  const handleModalClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="item-img">
        <img
          src={src}
          alt={`esta es la imagen con url ${url}`}
          className="item"
          onClick={handleModalClick}
        />
      </div>

      <ImageModal imageUrl={src} estado={showModal} setModal={setShowModal} />
    </>
  );
}
