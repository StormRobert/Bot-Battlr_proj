import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); 

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:8001/bots')
    .then((resp) => resp.json())
    .then((data) => setBots(data))
    .catch((error) => console.error('Error fetching data:', error));
}, []);


 

  return (
    <div className="App">
      <BotCollection
       bots={bots} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots}
      />
      <BotArmy
        enlistedBots={enlistedBots} releaseFromArmy={setEnlistedBots} />
    </div>
  );
}
export default App