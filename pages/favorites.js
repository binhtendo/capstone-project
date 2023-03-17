import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Layout from "@/components/Layout";
import Place from "@/components/Place";
import { apiGet } from "../utils/api";

export default function Favorites() {
  const [places, setPlaces] = useState([]);
  const [favoritePlaces, setFavoritePlaces] = useState([]);

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
          const isFavorite = localStorage.getItem(place.properties.xid)
            ? true
            : false;
          return {
            ...place,
            isFavorite: isFavorite,
          };
        });
        setPlaces(placesWithFavorite);
      })
      .catch((err) => console.log("Fetch Error :-S", err));
  }, []);

  useEffect(() => {
    const storedPlaces =
      JSON.parse(localStorage.getItem("favoritePlaces")) || [];

    // Find the favorite places in the full list of places
    const favoritePlacesData = places.filter((place) =>
      storedPlaces.includes(place.properties.xid)
    );

    // Update the state with the favorite places data
    setFavoritePlaces(favoritePlacesData);
  }, [places]);

  const toggleFavorite = (xid) => {
    setPlaces((previousPlaces) =>
      previousPlaces.map((place) => {
        if (place.properties.xid === xid) {
          const isFavorite = !place.isFavorite;
          localStorage.setItem(xid, isFavorite);
          return {
            ...place,
            isFavorite: isFavorite,
          };
        }
        return place;
      })
    );
  };

  return (
    <Layout>
      <>
        <h2>Favorite Places:</h2>
        <Navbar />
        <ul>
          {favoritePlaces.map((place) => (
            <Place
              key={place.properties.xid}
              name={place.properties.name}
              onFavorite={toggleFavorite}
              xid={place.properties.xid}
              isFavorite={place.isFavorite}
            />
          ))}
        </ul>
      </>
    </Layout>
  );
}
