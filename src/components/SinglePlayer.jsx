const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/players`;
import PlayerCard from "./PlayerCard";

const SinglePlayer = () => {
    const fetchSinglePlayer = async () => {
        try {
          const response = await fetch(`${APIURL}/14620`);
          const data = await response.json();
          const player = data.data.player;

          return(
            <PlayerCard key={player.id} player={player} />
          );

        } catch (err) {
          console.error(`Oh no, trouble fetching player #${playerId}!`, err);
        }
      };

}
export default SinglePlayer;