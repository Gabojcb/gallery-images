import * as React from "react";
import { Windows } from "gallery-images/components";
import { Search } from "./search";

export /*bundle*/ function AppSearch() {
  return (
    <>
      <>
        <Search />
      </>
      <section className="container__section">
        <Windows />
      </section>
    </>
  );
}
