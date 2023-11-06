import React from "react";

function BotCollection({bots, addToYourBotArmy}) {
    return (
        <div className="bot-collection">
          <h2>Bot Collection</h2>
          <ul>
            {bots.map((bot) => (
              <li key={bot.id}>
                {bot.name}
                <button onClick={() => addToYourBotArmy(bot)}>Add to Army</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default BotCollection;