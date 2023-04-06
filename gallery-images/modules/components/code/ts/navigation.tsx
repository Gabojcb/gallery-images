import * as React from "react";
import { DropDom } from "./drop-dom";
import { routing } from "@beyond-js/kernel/routing";
import { BeyondIconButton } from "@bgroup/ui/icons";

export /* bundle */ function Navigation() {
  const handleChangeNavigation = ({ currentTarget }) => {
    routing.pushState(currentTarget.dataset.href);
  };

  return (
    <>
      <h3 className="nav__h3">React Gallery</h3>
      <div className="nav__div-search">
        <input
          type="text"
          className="nav__input"
          placeholder="search for free photos"
        />
        <BeyondIconButton className="icon-beyond" icon="search" />
      </div>

      <div className="nav__category">
        <DropDom />
      </div>

      <div className="wrap">
        <button
          onClick={handleChangeNavigation}
          data-href="/form"
          className="button"
        >
          Add Images
        </button>
      </div>
    </>
  );
}
