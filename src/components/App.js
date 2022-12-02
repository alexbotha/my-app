import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";
import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";
import Player from "./Player";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/playerData`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  function updatingPlayerList(newPlayerDetails) {
    setPlayers([...players, newPlayerDetails]);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home loading={loading} />
        </Route>
        <Route exact path="/Players">
          <PlayerContainer loading={loading} players={players} />
        </Route>
        <Route exact path="/Players/New">
          <AddPlayer updatingPlayerList={updatingPlayerList} />
        </Route>
        <Route exact path="/Players/:id">
          <Player />
        </Route>

        <Route path="">
          <h4 className="pageNotFound">404 PAGE NOT FOUND</h4>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
