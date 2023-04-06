import * as React from "react";
import { Navigation, Footer, ItemImages } from "gallery-images/components";
import { useEffect } from "react";

export /*bundle*/ function AppGallery() {
  const [images, setImages] = React.useState([]);

  async function getFetch() {
    const response = await fetch("http://localhost:5000/gallery");
    const data = await response.json();
    setImages(data);
  }

  useEffect(() => {
    getFetch();
  }, []);

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

      <main className="images">
        {images.map((url) => (
          <ItemImages key={url} url={url} />
        ))}
      </main>
      <Footer />
    </>
  );
}

{
  /* <section className="container__section"></section> */
}
