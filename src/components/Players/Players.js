import React from "react";
import { useFootballTeamsContext } from "../../context/context";
import Player from "./Player";

const Players = () => {
  const { state, loadingForPlayers } = useFootballTeamsContext();
  const players = state.players;

  if (players.length > 0) {
    return (
      <div className="container container-center" style={{ paddingTop: "0" }}>
        {loadingForPlayers ? (
          <div className="loading" style={{ position: "relative" }}></div>
        ) : (
          <>
            <h1>Players</h1>
            {players.map((player) => (
              <Player key={player.id} player={player} />
            ))}
          </>
        )}
      </div>
    );
  } else return null;
};

export default Players;
