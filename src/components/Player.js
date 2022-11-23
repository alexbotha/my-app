import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {
  const [player, setPlayer] = useState({});

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/playerData/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data));
  }, [params.id]);

  return (
    <div className="carding">
      <img src={player.imageUrl} alt="player" />
      <h3>{player.name}</h3>
      <p>Age: {player.age}</p>
      <p>Nationality: {player.nationality}</p>
      <p>Position: {player.position}</p>
    </div>
  );
}

export default Player;
