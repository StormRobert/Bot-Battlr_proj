import React from "react";

function BotArmy({bots, releaseFromYourBotArmy, dischargeBot}) {
    return ( 
        <div className="bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            {bot.name}
            <button onClick={() => releaseFromYourBotArmy(bot)}>
              Release from Army
            </button>
            <button onClick={() => dischargeBot(bot)}>Discharge</button>
          </li>
        ))}
      </ul>
    </div>
     );
}

export default BotArmy;