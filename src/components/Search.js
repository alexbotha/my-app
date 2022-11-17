import React from "react";
import { useState } from "react";

function Search({ searchInputFunction }) {
  const [search, setSearch] = useState("");

  function onChange(e) {
    setSearch(e);
    searchInputFunction(e);
  }
  return (
    <div className="inputfields">
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search player name..."
          autoFocus
        />
      </form>
    </div>
  );
}

export default Search;
