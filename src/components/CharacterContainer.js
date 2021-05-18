import React from "react";
import Character from "./Character";
import styled from "styled-components";

const CharacterContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 80vh;
  align-content: center;
`;

const CharacterContainer = ({ charList }) => {
  if (!charList) return <h3>Loading..</h3>;
  return (
    <CharacterContainerDiv className="Character-Container">
      {charList.map((char) => {
        return <Character char={char} key={char.url} />;
      })}
    </CharacterContainerDiv>
  );
};

export default CharacterContainer;
