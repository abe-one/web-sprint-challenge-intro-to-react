// Dependencies
import axios from "axios";
import React, { useState, useEffect } from "react";
// Styling
import "./App.css";
import styled from "styled-components";
// Components
import CharacterContainer from "./components/CharacterContainer";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100vh;
  margin: 2rem;

  h1 {
    font-size: 7rem;
  }
  h2 {
    font-size: 2.4rem;
  }
`;

const App = () => {
  // Top level states
  const [charList, setCharList] = useState([]);
  const [updatedCharlist, SetUpdatedCharlist] = useState([]);

  const getHomeworlds = (apiARR) => {
    let homeworlds = apiARR.map((char) => {
      return char.homeworld;
    }); // homeworlds is assigned the value of an array of URLs linking to homeworld objects, some may repeat
    let uniqueHomeworlds = new Set(homeworlds); // To prevent API repeats, uniqueHomeworlds is assigned a set object of the unique URLS
    uniqueHomeworlds = Array.from(uniqueHomeworlds); // Convert to array
    // console.log(uniqueHomeworlds);
    let homeworldObjs = [];
    uniqueHomeworlds.map((URL) => {
      axios
        .get(URL)
        .then((res) => {
          console.log(res.data);
          homeworldObjs.push(res.data);
        })
        .catch((err) => {
          homeworldObjs.push({
            url: URL,
            name: "Error retrieving planetary resource",
          });
          console.log(URL, err);
        });
    });
    // return homeworldObjs; //Array of homeworld objs
    let listAndWorlds = apiARR.map((char) => {
      let fullWorld = homeworldObjs.find(({ url }) => url === char.url); // Return world obj that matches char world URL
      char.homeworld = fullWorld;
      return char;
    });
    SetUpdatedCharlist(listAndWorlds);
  };

  // API Fetch
  useEffect(() => {
    axios
      .get(`http://swapi.dev/api/people/`)
      .then((res) => {
        setCharList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!charList) {
      console.log("Loading Charlist");
    }
    console.log(getHomeworlds(charList));
  }, [charList]);

  return (
    <PageContainer className="App">
      <h1 className="Header">Pre Sequel Character Sheet</h1>
      <CharacterContainer charList={charList} />
    </PageContainer>
  );
};

export default App;
