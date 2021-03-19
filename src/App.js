// Dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";
// Styling
import "./App.css";
import styled from "styled-components";
// Components
import CharacterContainer from "./components/CharacterContainer";

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
    flex-direction: column;

    h1 {
      font-size: 7rem;
    }
    h2 {
      font-size: 2.4rem;
    }
  `;

  return (
    <PageContainer className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer charList={charList} />
    </PageContainer>
  );
};

export default App;
