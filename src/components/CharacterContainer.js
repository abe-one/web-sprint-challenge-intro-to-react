import React from "react";
import Character from "./Character";
import styled from "styled-components";

const CharacterContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 90vh;
  align-content: center;
`;

const CharacterContainer = ({ charList }) => {
  return (
    <CharacterContainerDiv className="Character-Container">
      {charList.map((char) => {
        return <Character char={char} key={char.url} />;
      })}
    </CharacterContainerDiv>
  );
};

export default CharacterContainer;
