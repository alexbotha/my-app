import React from "react";

function Search({ searchInputFunction }) {
  function onChange(e) {
    searchInputFunction(e);
  }
  return (
    <div className="inputfields">
      <form>
        <input
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search player name..."
          autoFocus
        />
      </form>
    </div>
  );
}

export default Search;
