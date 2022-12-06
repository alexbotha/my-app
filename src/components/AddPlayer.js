import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const linkStyles = {
  padding: "6px",
  margin: "0 6px 6px",
  fontFamily: "Arial, Helvetica, sans-serif",
  marginLeft: "30px",
  marginRight: "30px",
};

function AddPlayer({ updatingPlayerList }) {
  const history = useHistory();

  const [newPlayer, setNewPlayer] = useState({
    name: "",
    age: "",
    nationality: "",
    position: "",
    imageUrl: "",
  });

  function handleChange(event) {
    setNewPlayer({
      ...newPlayer,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    const newPlayerVar = newPlayer;

    event.preventDefault();

    fetch("http://localhost:3001/playerData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayerVar),
    })
      .then((r) => r.json())
      .then((newPlayerDetails) => updatingPlayerList(newPlayerDetails));
    history.push("/Players");
  }

  return (
    <div>
      <div className="addplayer">
        <h1>Adding a player to our GOAT index.</h1>
        <hr></hr>

        <p>Follow the instructions in the form below.</p>
        <p>Hit the submit button.</p>
        <p>
          Our app will automatically re direct you to the index so you can see
          your changes.
        </p>
      </div>
      <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name..."
          style={linkStyles}
          value={newPlayer.name}
        />
        <input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          placeholder="Image URL here..."
          style={linkStyles}
          value={newPlayer.imageUrl}
        />
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Position..."
          style={linkStyles}
          value={newPlayer.position}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Age..."
          style={linkStyles}
          value={newPlayer.age}
        />
        <input
          type="text"
          name="nationality"
          onChange={handleChange}
          placeholder="Nationality..."
          style={linkStyles}
          value={newPlayer.nationality}
        />
        <br />
        <br />

        <button className="addPlayerButton" type="submit" style={linkStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPlayer;
