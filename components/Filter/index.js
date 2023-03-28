import React, { useState } from "react";

const Filter = ({ results, setFilteredResults }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    const newFilterText = event.target.value;
    setFilterText(newFilterText);

    const filteredResults = results.filter((result) =>
      result.name.toLowerCase().includes(newFilterText.toLowerCase())
    );
    setFilteredResults(filteredResults);
  };

  return (
    <form>
      <label htmlFor="filter"></label>
      <input
        type="text"
        id="filter"
        placeholder="filter"
        value={filterText}
        onChange={handleFilterChange}
      />
    </form>
  );
};

export default Filter;
