import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player, fetchSinglePlayer, removePlayer }) => {
  const navigate = useNavigate();
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