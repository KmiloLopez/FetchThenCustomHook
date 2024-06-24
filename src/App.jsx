import React, { useState } from "react";

import { useEffect } from "react";
import { useLetsFetch } from "./letsFetch";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const App = () => {
  const [typedText, setTypedText] = useState("");
  const [lastsearch, setLastSearch] = useState();
  const [url, setUrl] = useState("");

  let { data, error, loading } = useLetsFetch(url); //custom hook

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${BASE_URL}${typedText}`);

    setLastSearch(typedText);
    setTypedText("");
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
        ></input>
        <button>SEARCH</button>
      </form>
      {error && <h2>We couldn't find pokemon {lastsearch}</h2>}
      {loading && <h2>Loading...</h2>}
      {data && <h2>Data fount</h2>}
    </>
  );
};
export default App;
