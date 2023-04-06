import * as React from "react";

export function ImageModal({ imageUrl, estado, setModal }) {
  const [count, setCount] = React.useState(0);
  const [active, setActive] = React.useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const setColor = (e) => {
    setActive(true);
    e.currenTarget.style.background = "red";
  };

  return (
    <>
      {estado && (
        <section className="modal">
          <div className="modal__text">
            <div className="modal__user">
              <img
                className="icon-user"
                src="img/icons/usuario.png"
                alt="usuario"
              />
              <h2>G4b903to</h2>
            </div>

            <div className="modal__color">
              <button
                onClick={() => setActive(true)}
                className={`heart-button ${active ? "active" : ""}`}
              >
                <img
                  className="icon-label"
                  src="img/icons/marcos.png"
                  alt="icon me gusta"
                />
              </button>
              <span>keep</span>
            </div>

            <div className="modal__count">
              <button onClick={incrementCount} className="modal__button">
                <img src="img/icons/me-gusta.png" alt="icon me gusta" />
              </button>
              <span>{count}</span>
            </div>

            <div onClick={() => setModal(false)} className="circle">
              <img
                className="modal__icons"
                src="img/icons/btn-delete.png"
                alt="btn delete"
              />
            </div>
          </div>

          {/* <div className="line"></div> */}

          <div className="modal__container-img">
            <img
              src={imageUrl}
              className="modal__img"
              alt={`esta es la imagen con url ${imageUrl}`}
            />
          </div>
        </section>
      )}
    </>
  );
}
