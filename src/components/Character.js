import React from "react";
// Add homeworld state
// Write your Character component here

const Character = ({ char }) => {
  return (
    <div className="char-container">
      <h2>{char.name}</h2>
      <p>'Birth Year: {char.birth_year}'</p>
    </div>
  );
};

export default Character;
