import React from "react";
import Character from "./Character";

const CharacterContainer = ({ charList }) => {
  return (
    <div className="Character-Container">
      {charList.map((char) => {
        return <Character char={char} key={char.url} />;
      })}
    </div>
  );
};

export default CharacterContainer;
