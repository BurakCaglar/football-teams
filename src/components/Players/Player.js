import React from "react";
import styled from "styled-components";

const Player = ({ player }) => {
  const {
    image,
    birthDate,
    passportArea,
    firstName,
    middleName,
    lastName,
    foot,
    role,
  } = player;

  /* Birthday and Age Start */

  const newBirthDate = new Date(birthDate).toLocaleDateString("en-US", {
    year: "numeric",
  });
  const tempBirthDate = new Date(birthDate);
  const today = new Date();
  const age = today.getFullYear() - tempBirthDate.getFullYear();

  /* Birthday and Age End*/

  return (
    <Wrapper>
      <div className="player-content ">
        <img
          src={image}
          alt={`${firstName} icon`}
          className={`${
            role.code3 === "GKP"
              ? "gkp"
              : role.code3 === "DEF"
              ? "def"
              : role.code3 === "MID"
              ? "mid"
              : "fwd"
          }`}
        />
        <div className="birth-and-country">
          <p className="birt">{newBirthDate}</p>
          <p className="country">{passportArea.alpha3code}</p>
        </div>
        <h4 className="fullname">{`${firstName} ${middleName} ${lastName}`}</h4>
        <p className="age">{age}</p>
        <p className="foot">{foot ? foot : "not found"}</p>
      </div>
    </Wrapper>
  );
};

export default Player;

const Wrapper = styled.div`
  .player-content {
    display: grid;
    grid-template-columns: 8rem 5rem 1fr 10rem 10rem;
    align-items: center;
    margin: 1rem auto;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      justify-content: center;
    }

    img {
      height: 60px;
      width: 60px;
      border: 2px solid;
      border-radius: 50px;
      margin: auto auto auto 2.9rem;
    }

    .birth-and-country {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: auto;
      text-align: center;
    }

    .fullname {
      margin-left: 1rem;
      @media screen and (max-width: 1000px) {
        text-align: center;
        margin-left: 0;
      }
    }

    .age,
    .foot {
      text-align: right;
      margin-right: 1rem;
      @media screen and (max-width: 1000px) {
        text-align: center;
        margin-right: 0;
      }
    }

    .gkp {
      border-color: purple;
    }
    .def {
      border-color: #64c2f6;
    }

    .mid {
      border-color: #fda71f;
    }

    .fwd {
      border-color: #3eb73b;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
`;
