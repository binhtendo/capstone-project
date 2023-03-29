import useLocalStorageState from "use-local-storage-state";
import React, { useState, useEffect } from "react";
import { cardStyles, previousButton, nextButton } from "@/styles";
import { fetchCityCoordinates, fetchPlaces } from "@/pages/api/fetch";
import Place from "../TogglePlace";
import Filter from "../Filter";
import Image from "next/image";

const SearchBox = ({ favorites, setFavorites }) => {
  const [query, setQuery] = useLocalStorageState("query", "");
  const [results, setResults] = useLocalStorageState("results", []);
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleResetSearch = () => {
    setQuery("");
    setResults([]);
    setFilteredResults([]);
    setCurrentPage(0);
  };

  useEffect(() => {
    if (results) {
      setFilteredResults(
        results
          .filter((place) => place.rate >= 5)
          .sort((a, b) => b.rate - a.rate)
      );
    }
  }, [results]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCurrentPage(0);
    const coordinates = await fetchCityCoordinates(query);
    if (coordinates) {
      const places = await fetchPlaces(coordinates.lat, coordinates.lon);
      const filteredPlaces = places.filter((place) => place.rate >= 5);
      const sortedPlaces = filteredPlaces.sort((a, b) => b.rate - a.rate);
      setResults(sortedPlaces);
      setFilteredResults(sortedPlaces);
    } else {
      const errorMessage = "Entry Couldn't Be Found";
      window.alert(errorMessage);
    }
  };

  const resultsPerPage = 10;
  const startIndex = currentPage * resultsPerPage;
  const endIndex = (currentPage + 1) * resultsPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchbox"></label>
        <input
          type="text"
          value={query || ""}
          onChange={handleChange}
          placeholder="Where to next?"
          required
        />
        <button type="submit" required>
          <Image src="/search.svg" alt="search" width={14} height={10} />
        </button>
        <button onClick={handleResetSearch}>
          <Image src="/reset.svg" alt="search" width={10} height={10} />
        </button>
      </form>
      <Filter results={results} setFilteredResults={setFilteredResults} />
      <div style={cardStyles}>
        <ul>
          {filteredResults &&
            filteredResults.slice(startIndex, endIndex).map((result, index) => (
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
        <button
          style={previousButton}
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          <Image src="/previous.svg" alt="button" width={17} height={17} />
        </button>
        <button
          style={nextButton}
          onClick={handleNextPage}
          disabled={endIndex >= filteredResults.length}
        >
          <Image src="/forward.svg" alt="button" width={17} height={17} />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
