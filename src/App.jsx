import React, { useState, useEffect } from 'react';
import AllPlayers from './components/AllPlayers';
import Header from './components/Header';
import NewPlayer from './components/NewPlayer';
import SinglePlayer from './components/SinglePlayer';

//const cohortName = "2302-ACC-CT-WEB-PT-A";

const App = () => {

  return (
    <div>
      <Header />
      <NewPlayer />
      <AllPlayers />
    </div>
  );
};

export default App;

/* <div>
<Header />
<NewPlayer />
<AllPlayers />
</div>
*/