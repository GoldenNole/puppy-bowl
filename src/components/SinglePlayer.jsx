const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Header from "./Header";

const SinglePlayer = () => {
  const { userId } = useParams();
  console.log("userId", userId);
  const [player, setPlayer] = useState([]);
  useEffect(() => {fetchSinglePlayers(); }, []);

  const fetchSinglePlayers = async () => {
    try {
      const response = await fetch(`${APIURL}/${userId}`);
      const data = await response.json();
      setPlayer(data.data.player);
  
    } catch (err) {
      console.error(`Oh no, trouble fetching player!`, err);
    }
  };
      return (
        <div>
        <Header />
          <div className="player-container">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <h3>Breed: {player.breed}</h3>
            <h3> Status: {player.status}</h3>
            <Link to={`/`}>
            <button className="close-button btn">Close</button>
            </Link>
          </div>
        </div>
      );
  };
export default SinglePlayer;