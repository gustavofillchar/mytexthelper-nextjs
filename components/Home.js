import React from "react";

import TextOptions from "./components/TextOptions";

export function Home() {
  return (
    <div className="mybackground">
      <div className="container">
        <div className="logoHeader">
          <img src='../assets/static/logo.svg' alt="A simple and free tool for converting text to UPPERCASE or LOWERCASE. Convert to URL format, encode, decode. Simple and easy to use. Free and online. Converter of texts and words for upper and lower case. Decode that URL full of strange characters into clean text." className="img-fluid" />
        </div>

        <TextOptions />

        <div className="signature">
          Powered by{" "}
          <a href="http://instagram.com/jubarte.digital" target="_blank">
            Jubarte Digital 🇧🇷
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
