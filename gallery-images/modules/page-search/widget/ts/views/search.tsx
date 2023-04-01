import * as React from "react";
import { BeyondIconButton } from "@bgroup/ui/icons";

export /*bundle*/ function Search() {
  return (
    <section className="container-input-search">
      <input
        className="search__input"
        type="text"
        placeholder="Search in react gallery"
      />
      <BeyondIconButton className="icon-beyond" icon="search" />
    </section>
  );
}
