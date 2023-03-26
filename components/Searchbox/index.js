import { togglePlaceStyles } from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import React, { useState } from "react";
import { cardStyles } from "@/styles";
import { fetchCityCoordinates, fetchPlaces } from "@/pages/api/fetch";
import Place from "../TogglePlace";

const SearchBox = () => {
  const [query, setQuery] = useLocalStorageState("query", {
    defaultValue: "",
  });
  const [results, setResults] = useLocalStorageState("results", {
    defaultValue: [],
  });
  const [favorites, setFavorites] = useLocalStorageState("favorites", {});

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coordinates = await fetchCityCoordinates(query);
    if (coordinates) {
      const places = await fetchPlaces(coordinates.lat, coordinates.lon);
      setResults(places);
    } else {
      const errorMessage = "Eintrag konnte nicht gefunden werden.";
      window.alert(errorMessage);
    }
  };

  const toggleFavorite = (xid) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites[xid];
      return { ...prevFavorites, [xid]: !isFavorite };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchbox"></label>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Wo geht's hin?"
          required
        />
        <button type="submit" required>
          🔍
        </button>
      </form>
      <div style={cardStyles}>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <Place
                name={result.name}
                xid={result.xid}
                isFavorite={favorites[result.xid]}
                onToggleFavorite={toggleFavorite}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SearchBox;
