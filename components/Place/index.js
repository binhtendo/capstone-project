import { useState } from "react";

export default function Place({ name, xid, isFavorite, onFavorite }) {
  const handleClick = () => {
    console.log("handleClick", xid);
    onFavorite(xid);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>{isFavorite ? "remove ★" : "add ☆"}</button>
    </div>
  );
}
