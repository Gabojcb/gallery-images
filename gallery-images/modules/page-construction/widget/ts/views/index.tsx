import * as React from "react";
import { Windows } from "gallery-images/components";

export /*bundle*/
function View() {
  return (
    <>
      <div className="container__construction">
        <div className="container-text">
          <h3 className="construction__h3">Under construction</h3>
          <h1 className="construction__h1">We are working on it</h1>
        </div>
        <img
          className="construction__img"
          src="img/icons/lanzadera.png"
          alt="lanzadera"
        />
      </div>
      <section className="container__section">
        <Windows />
      </section>
    </>
  );
}
