import React from "react";
import styled from "styled-components";
// Add homeworld state
// Write your Character component here

const CharacterDiv = styled.div`
  background-color: ${(pr) => pr.theme.mainColorTrans};
  border-radius: 10px;
  margin: 1rem;
`;

const Character = ({ char }) => {
  return (
    <CharacterDiv className="Character">
      <h2>{char.name}</h2>
      <p>Birth Year: {char.birth_year}</p>
    </CharacterDiv>
  );
};

export default Character;
