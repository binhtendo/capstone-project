import { useState } from "react";

export default function Place({ name, xid, isFavorite, onFavorite }) {
  const handleClick = () => {
    console.log("handleClick", xid);
    onFavorite(xid);
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handleClick}>{isFavorite ? "remove ★" : "add ☆"}</button>
    </div>
  );
}
