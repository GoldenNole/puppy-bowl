import PlayerCard from "./PlayerCard";

const RenderPlayers = ({ players, setPlayers }) => {
  return players.map((player) => (
    <PlayerCard key={player.id} player={player} setPlayers={setPlayers} />
  ));
};
export default RenderPlayers;