import useLocalStorageState from "use-local-storage-state";
import React, { useState, useEffect } from "react";
import { cardStyles } from "@/styles";
import { fetchCityCoordinates, fetchPlaces } from "@/pages/api/fetch";
import Place from "../TogglePlace";
import Filter from "../Filter";

const SearchBox = ({ favorites, setFavorites }) => {
  const [query, setQuery] = useLocalStorageState("query", "");
  const [results, setResults] = useLocalStorageState("results", []);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setFilteredResults(results);
  }, [results]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const coordinates = await fetchCityCoordinates(query);
    if (coordinates) {
      const places = await fetchPlaces(coordinates.lat, coordinates.lon);
      setResults(places);
      setFilteredResults(places);
    } else {
      const errorMessage = "Eintrag konnte nicht gefunden werden.";
      window.alert(errorMessage);
    }
  };

  return (
    <>
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
      <Filter results={results} setFilteredResults={setFilteredResults} />
      <div style={cardStyles}>
        <ul>
          {filteredResults &&
            filteredResults.map((result, index) => (
              <li key={index}>
                <Place
                  name={result.name}
                  xid={result.xid}
                  isFavorite={favorites[result.xid]}
                  onToggleFavorite={(name, xid) => {
                    const newFavorites = { ...favorites };
                    if (newFavorites[xid]) {
                      delete newFavorites[xid];
                    } else {
                      newFavorites[xid] = { name };
                    }
                    setFavorites(newFavorites);
                  }}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBox;
