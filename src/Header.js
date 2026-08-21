import React from "react";
import logo from "./logo.png";

export default function Header() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              class="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>
    </div>
  );
}
