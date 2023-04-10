import * as React from "react";
import { BeyondIcon } from "@bgroup/ui/icons";
export function LikeAction({ image }) {
  const [count, setCount] = React.useState(0);
  const [liked, setLiked] = React.useState(
    !!localStorage.getItem(`like.${image}`)
  );

  const incrementCount = () => {
    if (liked) {
      setLiked(false);
      setCount((count) => count - 1);
      return;
    }
    localStorage.setItem(`like.${image}`, "true");
    setCount(count + 1);
    return;
  };
  const icon = liked ? "favorite" : "favoriteBorder";
  const cls = `icon__modal-action${liked ? " liked" : ""}`;

  return (
    <div className="modal__count">
      <button onClick={incrementCount} className="modal__button">
        <BeyondIcon className={cls} icon={icon} />
      </button>
      <span>{count}</span>
    </div>
  );
}
