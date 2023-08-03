import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player, setPlayers }) => {
  const navigate = useNavigate();
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;

  const removePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/${playerId}`, {
        method: "DELETE"
      });
      const player = await response.json();
      console.log(player);
      const response2 = await fetch(APIURL);
      const data = await response2.json();
      const playerArray = data.data.players;
      setPlayers(playerArray);
    } catch (err) {
      console.error(
        `Whoops, trouble removing player #${playerId} from the roster!`,
        err
      );
    }
  };

  return (
    <div className="player">
      <div className="players-container">
        <h2>{player.name}</h2>
        <img src={player.imageUrl} alt={player.name} />
        <button className="details-button btn" onClick={() => navigate(`/${player.id}`)}>See Details</button>

        <button className="delete-button btn" onClick={() => removePlayer(player.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PlayerCard;