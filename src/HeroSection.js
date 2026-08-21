import React from "react";
import "./HeroSection.css";
import SearchForm from "./SearchForm";

export default function HeroSection() {
  return (
    <div className="heroSection">
      <div className="title">
        <h1>Explore the language of everything</h1>
        <h2>
          A comprehensive, modular concept map and terminology index across
          academic disciplines.{" "}
        </h2>
      </div>
      <SearchForm />
    </div>
  );
}
