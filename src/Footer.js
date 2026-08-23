import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container row footer-container">
      <p>Designed & developed by Juliana Santos</p>
      <p>Built with React · JavaScript · Axios · SheCodes API.</p>
      <p>
        Open-source on{" "}
        <a href="https://github.com/judosSantos/dictionary">GitHub</a> · Hosted
        on{" "}
        <a href="https://app.netlify.com/teams/judossantos/projects">Netlify</a>
      </p>
    </div>
  );
}
