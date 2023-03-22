import { useEffect, useState } from "react";
import Place from "../Place";
import { apiGet } from "../../utils/api";
import Searchbox from "../Searchbox";

export default function PlacesToVisitOverview() {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.length === 0) {
      return;
    }
    apiGet("geoname", "name=" + searchTerm + "&limit=1")
    //   .then((data) => {
        // const lat = data[0].lat;
        // const lon = data[0].lon;
        // apiGet("radius", `radius=10000&lon=${lon}&lat=${lat}&type=sightseeing`)
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
          })
          .catch((err) => console.log("Fetch Error :-S", err));
      })
      .catch((err) => console.log("Fetch Error :-S", err));
  }, [searchTerm]);

  const toggleFavorite = (xid) => {
    setPlaces(
      places.map((place) => {
        if (place.properties.xid === xid) {
          return {
            ...place,
            isFavorite: !place.isFavorite,
          };
        }
        return place;
      })
    );
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPlaces = places.filter((place) =>
    place.properties.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Results:</h2>
      <Searchbox value={searchTerm} onChange={handleSearch} />
      {searchTerm.length > 0 && (
        <ul>
          {filteredPlaces.map((place, index) => (
            <Place
              key={place.properties.xid}
              name={place.properties.name}
              onFavorite={toggleFavorite}
              xid={place.properties.xid}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
