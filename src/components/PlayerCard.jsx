import React from 'react';

const PlayerCard = ({ player, fetchSinglePlayer, removePlayer }) => {
  return (
    <div className="player">
      <div className="players-container">
        <h2>{player.name}</h2>
        <img src={player.imageUrl} alt={player.name} />
        <button
          className="details-button btn"
          onClick={() => fetchSinglePlayer(player.id)}
        >
          See Details
        </button>
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