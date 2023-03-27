import * as React from "react";
import { Navigation, Windows } from "gallery-images/components";

export /*bundle*/ function AppGallery() {
  return (
    <>
      <nav className="container__nav">
        <Navigation />
      </nav>
      <section className="container__image">
        <img
          className="image__img"
          src="img/principal/Images-rafiki.png"
          alt="rafiki"
        />

        <img
          className="image__img"
          src="img/principal/Images-pana.png"
          alt="img 2"
        />
      </section>
      <section className="container__section">
        <Windows />
      </section>
    </>
  );
}
