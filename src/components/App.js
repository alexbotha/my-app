import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";
import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/playerData`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  function searchInputFunction(e) {
    setSearchInput(e);
  }

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/View">
          <PlayerContainer
            loading={loading}
            players={filteredPlayers}
            getSearchInput={searchInputFunction}
          />
        </Route>
        <Route exact path="/View/AddPlayer">
          <AddPlayer players={players} setPlayers={setPlayers} />
        </Route>
        <Route exact path="/">
          <Home loading={loading} />
        </Route>
        <Route path="">404 (not found)</Route>
      </Switch>
    </div>
  );
}

export default App;
