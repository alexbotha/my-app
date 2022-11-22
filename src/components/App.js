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

  function updatingPlayerList(newPlayerDetails) {
    setPlayers([...players, newPlayerDetails]);
  }

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Players">
          <PlayerContainer
            loading={loading}
            filteredPlayers={filteredPlayers}
            searchInputFunction={searchInputFunction}
          />
        </Route>
        <Route exact path="/AddPlayer">
          <AddPlayer updatingPlayerList={updatingPlayerList} />
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
