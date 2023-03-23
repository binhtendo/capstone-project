import useLocalStorageState from "use-local-storage-state";
import React from "react";
import { cardStyles } from "@/styles";

const SearchBox = () => {
  const [query, setQuery] = useLocalStorageState("query", {
    defaultValue: "",
  });
  const [results, setResults] = useLocalStorageState("results", {
    defaultValue: [],
  });
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchCityCoordinates = async (cityName) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${cityName}&format=json`
    );
    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        return { lat, lon };
      }
    }
    return null;
  };
  const fetchPlaces = async (lat, lon) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const response = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${lon}&lat=${lat}&rate=3&format=json&apikey=${apiKey}`
    );
    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        setResults(data);
        console.log(data);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const coordinates = await fetchCityCoordinates(query);
    if (coordinates) {
      await fetchPlaces(coordinates.lat, coordinates.lon);
    } else {
      console.error("Error fetching city coordinates");
    }
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
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SearchBox;
