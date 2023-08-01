import PlayerCard from "./PlayerCard";
import RenderPlayers from "./RenderPlayers";
//import { fetchAllPlayers } from "../API/index"
import React, { useState, useEffect } from 'react';
import Search from "./Search";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

    useEffect(() => {
      fetchAllPlayers();
    }, []);

    const fetchAllPlayers = async () => {
      try {
        const response = await fetch(APIURL);
        const data = await response.json();
        const playerArray = data.data.players;
        setPlayers(playerArray);
      } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
      }
    };

    return (
      <div>
        <Search players={players} />
      </div>
    );
};

export default AllPlayers