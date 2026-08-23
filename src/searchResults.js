import React from "react";
import "./SearchResults.css";
import folder from "./folder.png";
import Meaning from "./Meaning.js";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <di className="container">
        <div className="search-results">
          <h1 className="word">{props.results.word}</h1>

          <div className="pronunciation">/{props.results.phonetic}/</div>

          <div className="result-card">
            <div className="card-title">
              <span>
                <img
                  src={folder}
                  alt="Folder"
                  width="30"
                  className="d-inline-block align-text-top"
                />
              </span>

              <strong>Meaning</strong>
            </div>

            <div className="meaning-results">
              <Meaning meanings={props.results.meanings} />
            </div>
          </div>

          <div className="result-card ">
            <div className="card-title">
              <span>
                <img
                  src={folder}
                  alt="Folder"
                  width="30"
                  className="d-inline-block align-text-top"
                />
              </span>
              <strong>Adjective</strong>
            </div>

            <p>
              Lasting for a very short time. Something that is fleeting,
              transitory, or short-lived.
            </p>
          </div>

          <div className="result-card">
            <div className="card-title">
              <span>
                <img
                  src={folder}
                  alt="Folder"
                  width="30"
                  className="d-inline-block align-text-top"
                />
              </span>
              <strong>Synonyms</strong>
            </div>

            <div className="synonyms">
              <span>fleeting</span>
              <span>transitory</span>
              <span>brief</span>
              <span>short-lived</span>
              <span>momentary</span>
              <span>passing</span>
              <span>temporary</span>
            </div>
          </div>

          <div className="result-card">
            <div className="card-title">
              <span>
                {" "}
                <img
                  src={folder}
                  alt="Folder"
                  width="30"
                  className="d-inline-block align-text-top"
                />
              </span>
              <strong>Images</strong>
            </div>
          </div>
        </div>
      </di>
    );
  } else {
    return null;
  }
}
