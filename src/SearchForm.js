import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";
import SearchResults from "./SearchResults.js";
import searchIcon from "./searchIcon.png";

export default function SearchForm() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    ///documentation https://dictionaryapi.dev/
    const key = "76ab2ecoa4e0c3c3807ad4cff1b5696t";
    const urlApi = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

    axios.get(urlApi).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="form-search">
      <form onSubmit={search}>
        <input className="search-bar" type="search" onChange={updateWord} />
        <button type="submit">
          <img
            className="search-icon"
            src={searchIcon}
            alt="Search"
            width="30"
          />
        </button>
      </form>

      <SearchResults results={results} />
    </div>
  );
}
