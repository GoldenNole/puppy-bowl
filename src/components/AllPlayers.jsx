import React, { useState, useEffect } from 'react';
import Search from "./Search";
import Header from "./Header";
import NewPlayer from "./NewPlayer";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {fetchAllPlayers();}, [players]);
  
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
      <Header />
      <NewPlayer players={players} setPlayers={setPlayers} />
      <Search players={players} setPlayers={setPlayers} />
    </div>
  );
};

export default AllPlayers