import React from "react";
import PlayerItem from "./PlayerItem";
import AddPlayerButton from "./AddPlayerButton";
import Search from "./Search";
import ScrollButton from "./ScrollButton";

function PlayerContainer({ players, loading, searchInputFunction }) {
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
        <br></br>
        <Search searchInputFunction={searchInputFunction} />
      </div>
      {players.map((player) => (
        <PlayerItem key={player.id} player={player}></PlayerItem>
      ))}
      <ScrollButton />
    </React.Fragment>
  );
}

export default PlayerContainer;
