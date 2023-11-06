import React from "react";

let testData ={
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"

}
function SingleBot ({testData}) {
    function handleBotClick(){

    }

    return ( 
        <div style = {{border : "{2px solid black}", margin: "20px"}}
        onClick={() => {}}>
            <img src = {testData.avatar_url} />
            <p>Name: {testData.name} </p>
            <p>Health: {testData.health} </p>
            <p>Class: {testData.bot_class} </p>

        </div>
     );
}

export default SingleBot;