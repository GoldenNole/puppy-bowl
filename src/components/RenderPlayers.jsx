import PlayerCard from "./PlayerCard";

const RenderPlayers = ({ players }) => {
  return players.map((player) => (
    <PlayerCard key={player.id} player={player} />
  ));
};
export default RenderPlayers;