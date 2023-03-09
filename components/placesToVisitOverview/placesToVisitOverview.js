import useSWR from "swr";
import styled from "styled-components";
import { useEffect, useState } from "react";

const apiKey = "5ae2e3f221c38a28845f05b6cb7a6da1b4898cff0f86c1f60c68602a";

function apiGet(method, query) {
  return new Promise(function (resolve, reject) {
    var otmAPI =
      "https://api.opentripmap.com/0.1/en/places/" +
      method +
      "?apikey=" +
      apiKey;
    if (query !== undefined) {
      otmAPI += "&" + query;
    }
    fetch(otmAPI)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  });
}

export default function PlacesToVisitOverview() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    apiGet("radius", "radius=10000&lon=9.99302&lat=53.55073&type=sightseeing")
      .then((data) => {
        const sortedData = data.features
          .filter((place) => place.properties.rate >= 4)
          .sort((a, b) => b.properties.rate - a.properties.rate);

        const placesWithFavorite = sortedData.map((place) => ({
          ...place,
          isFavorite: false,
        }));
        setPlaces(placesWithFavorite);
      })
      .catch((err) => console.log("Fetch Error :-S", err));
  }, []);

  const toggleFavorite = (index) => {
    const newPlaces = [...places];

    newPlaces[index].isFavorite = !newPlaces[index].isFavorite;

    setPlaces(newPlaces);
  };

  return (
    <div>
      <h1>Places to Visit</h1>
      <ul>
        {places.map((place, index) => (
          <li
            key={place.properties.xid}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{place.properties.name}</span>
            <button onClick={() => toggleFavorite(index)}>
              {place.isFavorite ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
