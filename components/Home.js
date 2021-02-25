import React from "react";

import TextOptions from "./components/TextOptions";

export function Home() {
  return (
    <div className="mybackground">
      <div className="container">
        <div className="logoHeader">
          <img src='../assets/static/logo.svg' alt="logo" className="img-fluid" />
        </div>

        <TextOptions />

        <div className="signature">
          Powered by{" "}
          <a href="http://instagram.com/jubarte.digital" target="_blank">
            jubartelabs
          </a>
          . Developed by{" "}
          <a href="https://github.com/gustavofillchar" target="_blank">
            gustavofillchar
          </a>
          .
        </div>
      </div>
    </div>
  );
}
