import RenderPlayers from "./RenderPlayers";
import React, { useState } from 'react';

const Search = ({ players }) => {

  const [searchField, setSearchField] = useState("");

  const filteredPlayers = players.filter(player => {
    return (player.name.toLowerCase().includes(searchField.toLowerCase()));
  }
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <section>
      <div>
        <h2>Search</h2>
        <input 
          type = "search" 
          placeholder = "Search Dogs" 
          onChange = {handleChange}
        />
      </div>
      <RenderPlayers players={filteredPlayers} />
    </section>
  );

};
export default Search;

