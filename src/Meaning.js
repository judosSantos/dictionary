import React from "react";

export default function Meaning(props) {
  return (
    <div className="meanings">
      {props.meanings.map((meaning, index) => (
        <div className="meaning-definition" key={index}>
          <div className="meaning-title">
            <strong>{meaning.partOfSpeech}</strong>
          </div>
          <p className="meaning-definition">{meaning.definition}</p>
          {meaning.example && (
            <p className="exemple">exemple: {meaning.example}"</p>
          )}
          {meaning.synonyms && (
            <p className="synonym"> synonym: {meaning.synonyms}</p>
          )}
        </div>
      ))}
    </div>
  );
}
