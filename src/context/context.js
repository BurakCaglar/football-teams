import React, { useReducer, useState } from "react";
import reducer from "../reducer/reducer";
import axios from "axios";
import { BASE_API } from "../api/api";

const initialState = {
  teams: [],
  players: [],
};

const FootballTeamsContext = React.createContext(initialState);

export const FootballTeamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loadingForPlayers, setLoadingForPlayers] = useState(true);

  /* FUNCTIONS */
  /* PLAYERS API START */

  const fetchPlayers = async (id) => {
    try {
      if (id) {
        setLoadingForPlayers(true);
        const response = await axios.get(`${BASE_API}/${id}/players`);
        const players = await response.data.players;
        dispatch({
          type: "FETCH_PLAYERS",
          payload: players,
        });
        setLoadingForPlayers(false);
      }
    } catch (error) {}
  };

  /* PLAYERS API END */

  return (
    <FootballTeamsContext.Provider
      value={{ state, dispatch, fetchPlayers, loadingForPlayers }}
    >
      {children}
    </FootballTeamsContext.Provider>
  );
};

export const useFootballTeamsContext = () => {
  return React.useContext(FootballTeamsContext);
};
