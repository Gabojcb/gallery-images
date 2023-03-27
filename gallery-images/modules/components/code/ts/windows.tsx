import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";

export /*bundle*/ function Windows() {
  const handleChangePage = ({ currentTarget }) => {
    routing.pushState(currentTarget.dataset.href);
  };

  return (
    <>
      <div className="eleyash home">
        <a onClick={handleChangePage} data-href="/home">
          <img className="eleyash__img" src="img/icons/home.png" alt="home" />
        </a>
      </div>
      <div className="eleyash search">
        <a onClick={handleChangePage} data-href="/search">
          <img className="eleyash__img" src="img/icons/lupa.png" alt="lupa" />
        </a>
      </div>
      <div className="eleyash notification">
        <a onClick={handleChangePage} data-href="/construction">
          <img
            className="eleyash__img"
            src="img/icons/notificacion.png"
            alt="notificacion"
          />
        </a>
      </div>
    </>
  );
}
