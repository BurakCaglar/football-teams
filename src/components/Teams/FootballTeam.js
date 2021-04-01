import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFootballTeamsContext } from "../../context/context";

const FootballTeam = ({ footballTeam }) => {
  const [id, setId] = useState("");

  const { fetchPlayers } = useFootballTeamsContext();

  useEffect(() => {
    fetchPlayers(id);
  }, [id]);

  return (
    <Wrapper>
      <button
        value={footballTeam.id}
        onClick={(e) => setId(e.target.value)}
        className="team"
      >
        <img src={footballTeam.icon} alt={`${footballTeam.name} icon`} />

        <p>{footballTeam.name}</p>
      </button>
    </Wrapper>
  );
};

export default FootballTeam;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
      p {
        background-color: #d8efff;
      }
    }

    &:focus {
      p {
        background-color: #25aefe;
        color: white;
      }
    }

    p {
      width: 130px;
      height: 25px;
      background-color: #ededed;
      border: none;
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      line-height: 25px;
      z-index: -1;
    }
  }

  img {
    height: 70px;
    width: 70px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    z-index: -1;
  }
`;
