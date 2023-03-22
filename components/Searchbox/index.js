import React from "react";

function Searchbox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search places"
      value={value}
      onChange={onChange}
    />
  );
}

export default Searchbox;
