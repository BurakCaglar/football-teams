import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import FootballTeam from "./FootballTeam";
import { useFootballTeamsContext } from "../../context/context";
import { BASE_API } from "../../api/api";

const FootballTeams = () => {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useFootballTeamsContext();

  const fetchFootballTeams = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_API);
      const teams = await response.data.teams;
      dispatch({
        type: "FETCH_TEAMS",
        payload: teams,
      });
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchFootballTeams();
  }, []);

  return (
    <Wrapper>
      <div className="container container-center">
        {loading ? (
          <div className="loading"></div>
        ) : (
          <>
            <h1>Teams</h1>
            <div className="teams">
              {state.teams.map((footballTeam) => {
                return (
                  <FootballTeam
                    key={footballTeam.id}
                    footballTeam={footballTeam}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default FootballTeams;

const Wrapper = styled.div`
  .teams {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      justify-content: center;
    }
  }
`;
