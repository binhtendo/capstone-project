import useSWR from "swr";
import styled from "styled-components";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_apiKey;

export function apiGet(method, query) {
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
    <div>
      <h1>Places to Visit</h1>
      <ul>
        {places.map((place, index) => (
          <li key={place.properties.xid}>
            <span>{place.properties.name}</span>
            <button
              onClick={() => {
                const newPlaces = [...places];
                newPlaces[index].isFavorite = !newPlaces[index].isFavorite;
                setPlaces(newPlaces);
              }}
            >
              {place.isFavorite ? "★" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
