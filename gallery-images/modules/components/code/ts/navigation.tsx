import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";

export /* bundle */ function Navigation() {
  const handleChangeNavigation = ({ currentTarget }) => {
    routing.pushState(currentTarget.dataset.href);
  };

  return (
    <>
      <h3 className="nav__h3">React Gallery</h3>

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
