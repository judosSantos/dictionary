import React, { useState } from "react";
import "./SearchForm.css";
import axios from "axios";

export default function SearchForm() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(urlApi).then(handleResponse);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="form-search">
      <form onSubmit={search}>
        <input className="search-bar" type="search" onChange={updateWord} />
      </form>
    </div>
  );
}
