import React, { useState } from "react";
import PlayerItem from "./PlayerItem";
import AddPlayerButton from "./AddPlayerButton";
import Search from "./Search";

function PlayerContainer({ loading, players }) {
  const [searchInput, setSearchInput] = useState("");

  function searchInputFunction(e) {
    setSearchInput(e);
  }

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <React.Fragment>
      <div className="database">
        <h1>GOAT index.</h1>
        <hr></hr>
        <br></br>
        <AddPlayerButton />
        <p>
          Below you will find an array of the greatest players to ever grace a
          Football pitch.
        </p>
        <p>Fancy sarching for someone specifically? Use the bar below</p>
        <br></br>
        <Search searchInputFunction={searchInputFunction} />
      </div>
      {filteredPlayers.map((filteredPlayer) => (
        <PlayerItem
          key={filteredPlayer.id}
          filteredPlayer={filteredPlayer}
          id={filteredPlayer.id}
        />
      ))}
    </React.Fragment>
  );
}

export default PlayerContainer;
