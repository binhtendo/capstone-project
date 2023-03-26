import { useState } from "react";
import { togglePlaceStyles } from "@/styles";

export default function Place({ name, xid, isFavorite, onToggleFavorite }) {
  const handleClick = () => {
    console.log("handleClick", xid);
    onToggleFavorite(xid);
  };

  return (
    <div style={togglePlaceStyles}>
      <p>{name}</p>
      <button onClick={handleClick}>{isFavorite ? "★" : "☆"}</button>
    </div>
  );
}
