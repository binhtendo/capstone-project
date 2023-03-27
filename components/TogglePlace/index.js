import { togglePlaceStyles } from "@/styles";
import Image from "next/image";

export default function Place({ name, xid, isFavorite, onToggleFavorite }) {
  const handleClick = () => {
    console.log("handleClick", xid);
    onToggleFavorite(name, xid);
  };
  return (
    <div style={togglePlaceStyles}>
      <p>{name}</p>
      <button onClick={handleClick}>
        {isFavorite ? (
          <Image
            src="/togglestarfilled.svg"
            alt="filled star"
            width={20}
            height={20}
          />
        ) : (
          <Image
            src="/togglestar.svg"
            alt="empty star"
            width={20}
            height={20}
          />
        )}
      </button>
    </div>
  );
}
