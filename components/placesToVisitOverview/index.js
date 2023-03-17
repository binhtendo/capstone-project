import { useEffect, useState } from "react";
import Place from "../Place";
import { apiGet } from "../../utils/api";
import { cardStyles } from "@/styles";

export default function PlacesToVisitOverview() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    apiGet("radius", "radius=10000&lon=9.99302&lat=53.55073&type=sightseeing")
      .then((data) => {
        const sortedData = data.features
          .filter((place) => place.properties.rate >= 4)
          .sort((a, b) => b.properties.rate - a.properties.rate);
        const uniqueData = new Set(
          sortedData.map((place) => place.properties.name)
        );
        const placesWithFavorite = [...uniqueData].map((name) => {
          const place = sortedData.find(
            (place) => place.properties.name === name
          );
          return {
            ...place,
            isFavorite: false,
          };
        });
        setPlaces(placesWithFavorite);
        console.log(placesWithFavorite);
      })
      .catch((err) => console.log("Fetch Error :-S", err));
  }, []);

  return (
    <div style={cardStyles}>
      <h2>Results:</h2>
      <ul>
        {places.map((place, index) => (
          <Place key={place.properties.xid} name={place.properties.name} />
        ))}
      </ul>
    </div>
  );
}
