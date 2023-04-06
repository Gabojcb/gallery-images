import * as React from "react";
import { Navigation, Footer } from "gallery-images/components";
import { Form } from "./form";

export /*bundle*/ function AppForm() {
  return (
    <>
      <nav className="container__nav">
        <Navigation />
      </nav>
      <Form />
      <Footer />
    </>
  );
}
