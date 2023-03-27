import React, { useState } from "react";

const Filter = ({ results, setFilteredResults }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    const newFilterText = e.target.value;
    setFilterText(newFilterText);

    const filteredResults = results.filter((result) =>
      result.name.toLowerCase().includes(newFilterText.toLowerCase())
    );
    setFilteredResults(filteredResults);
  };

  return (
    <div>
      <label htmlFor="filter"></label>
      <input
        type="text"
        id="filter"
        placeholder="filter"
        value={filterText}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
