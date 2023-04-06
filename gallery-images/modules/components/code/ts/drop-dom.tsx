import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";
import { BeyondIconButton } from "@bgroup/ui/icons";

export /* bundle */ function DropDom() {
  const handleChangeNav = ({ currentTarget }) => {
    routing.pushState(currentTarget.dataset.href);
  };

  return (
    <>
      <ul className="cont-ul">
        <li onClick={handleChangeNav} data-href="/home">
          MENU
        </li>
        <li className="drop-dom">
          CATEGORIES
          <ul className="ul-second">
            <li className="item">bicycles</li>
            <li className="item">balls</li>
            <li>icons</li>
            <li>cars</li>
          </ul>
        </li>
        <BeyondIconButton className="icon-beyond" icon="arrowDropDown" />
      </ul>
    </>
  );
}
