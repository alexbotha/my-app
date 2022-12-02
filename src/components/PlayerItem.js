import React from "react";
import { NavLink } from "react-router-dom";

function PlayerItem({ id, filteredPlayer }) {
  return (
    <div className="carding">
      <img src={filteredPlayer.imageUrl} alt="player" />
      <h3>
        <NavLink to={`/players/${id}`}>{filteredPlayer.name}</NavLink>
      </h3>
    </div>
  );
}

export default PlayerItem;
