import React from "react";
import useFetch from "../hooks/useFetch";
import "../constants";

import ThemedHeader from "./Header.js";
import { API_URL } from "../constants";
import StarshipList from "./StarshipsList.js";
import Loader from "./Loader.js";

const App = ({ currentTheme }) => {
  const result = useFetch(API_URL);
  const fetch = result.response;

  return (
    <div className="App">
      <ThemedHeader />

      {!fetch ? <Loader /> : <StarshipList starships={fetch} />}
    </div>
  );
};

export default App;
