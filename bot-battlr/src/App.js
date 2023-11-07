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

const releaseFromArmy = (updatedEnlistedBots) => {
  // Implement the logic to release bots from the army
  setEnlistedBots(updatedEnlistedBots);
};
 

  return (
    <div className="App">
        <BotArmy 
        enlistedBots={enlistedBots} 
        releaseFromYourBotArmy={releaseFromArmy}/>

      <BotCollection
       bots={bots} 
       enlistedBots={enlistedBots} 
       setEnlistedBots={setEnlistedBots}
      />
      
    </div>
  );
}
export default App