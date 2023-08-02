import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player, fetchSinglePlayer }) => {
  const navigate = useNavigate();

  // const removePlayer = async (playerId) => {
  //   try {
  //     const response = await fetch(`${APIURL}/${playerId}`, {
  //       method: "DELETE"
  //     });
  //     const player = await response.json();
  //     console.log(player);
  //     fetchAllPlayers();
  //     window.location.reload();
  //   } catch (err) {
  //     console.error(
  //       `Whoops, trouble removing player #${playerId} from the roster!`,
  //       err
  //     );
  //   }
  // };

  return (
    <div className="player">
      <div className="players-container">
        <h2>{player.name}</h2>
        <img src={player.imageUrl} alt={player.name} />
        <button className="details-button btn" onClick={() => navigate(`/${player.id}`)}>See Details</button>

        <button
          className="delete-button btn"
          onClick={() => removePlayer(player.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;