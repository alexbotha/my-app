import React from "react";
import PlayerItem from "./PlayerItem";
import AddPlayerButton from "./AddPlayerButton";
import Search from "./Search";
import ScrollButton from "./ScrollButton";

function PlayerContainer({ filteredPlayers, loading, searchInputFunction }) {
  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <React.Fragment>
      <div className="database allText">
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
        <PlayerItem key={filteredPlayer.id} filteredPlayer={filteredPlayer} />
      ))}

      <ScrollButton />
    </React.Fragment>
  );
}

export default PlayerContainer;
