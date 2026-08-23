import React from "react";

export default function Meaning(props) {
  return (
    <div className="meanings">
      {props.meanings.map((meaning, index) => (
        <div className="meaning-definition" key={index}>
          <div className="">
            <strong>{meaning.partOfSpeech}</strong>
          </div>

          <p className="meaning-definition">{meaning.definition}</p>

          {meaning.example && <p className="example">"{meaning.example}"</p>}
        </div>
      ))}
    </div>
  );
}
