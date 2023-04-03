import * as React from "react";
import { Navigation, Windows } from "gallery-images/components";
import { Form } from "./form";

export /*bundle*/ function AppForm() {
  return (
    <>
      <nav className="container__nav">
        <Navigation />
      </nav>
      <section className="container__section-form">
        <Form />
      </section>
      <section className="container__section">
        <Windows />
      </section>
    </>
  );
}
