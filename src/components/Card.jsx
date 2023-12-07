import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Card({ title, contents }) {
  const visibility = useContext(VisibilityContext);
  const visible = visibility.isItemVisible(contents);
  return (
    <div
      role="button"
      style={{
        border: "1px solid pink",
        display: "inline-block",
        margin: " 0 10px",
        width: "150px",
        userSelect: "none",
      }}
    >
      <div>
        <h3>{title}</h3>
        <span>{contents}</span>
      </div>
    </div>
  );
}

export default Card;
