import React from "react";
import "./HeroSection.css";
import SearchForm from "./SearchForm";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="title">
        <h1>Explore the language of everything</h1>
        <h2>
          An interactive dictionary for exploring words and their meanings.{" "}
        </h2>
      </div>
      <SearchForm />
    </div>
  );
}
