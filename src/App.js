// Dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";
// Styling
import "./App.css";
import styled from "styled-components";
// Components
import Character from "./components/Character";

const App = () => {
  // Top level states
  const [charList, setCharList] = useState([]);

  // API Fetch
  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/people/`)
      .then((res) => setCharList(res.data.results))
      .catch((err) => alert(err))
      .finally();
  }, []);

  const PageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  `;

  return (
    <PageContainer className="App">
      <h1 className="Header">Characters</h1>
      <div className="Character-Container">
        {charList.map((char) => {
          return <Character char={char} key={char.url} />;
        })}
      </div>
    </PageContainer>
  );
};

export default App;
