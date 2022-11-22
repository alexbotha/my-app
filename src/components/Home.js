import React from "react";

function Home({ loading }) {
  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="homepage">
      <h1>Welcome, to the GOAT index.</h1>
      <hr></hr>
      <p>
        An index for the greatest players to play the game.
        <br></br>
        <br></br>
        View a wide selection of player cards in our view index section, add
        your own legend of the game to the index via the add player, or search
        for specific players in our search bar.
      </p>
      <img src="goat.jpg" alt="A goat with a ball" />
    </div>
  );
}
export default Home;
