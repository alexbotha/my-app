import React from "react";

function PlayerItem({ filteredPlayer }) {
  return (
    <div>
      <div className="carding">
        <img src={filteredPlayer.imageUrl} alt="player" />

        <h3>{filteredPlayer.name}</h3>
        <p>Age: {filteredPlayer.age}</p>
        <p>Nationality: {filteredPlayer.nationality}</p>
        <p>Position: {filteredPlayer.position}</p>
      </div>
    </div>
  );
}

export default PlayerItem;
