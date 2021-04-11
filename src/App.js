import React from "react";
import { RickyismsList, WhatHeMeant } from "./rickyisms/rickysms";

function App() {
  function getRickyQuote() {
    let randomQuoteNum = Math.floor(Math.random() * RickyismsList.length);
    let rickyQuoteParagraph = document.getElementById("ricky-quote");
    let rightQuoteParagraph = document.getElementById("right-quote");
    rickyQuoteParagraph.innerText = `Rickyism:\n${RickyismsList[randomQuoteNum]}`;
    rightQuoteParagraph.innerText = `Rightism:\n${WhatHeMeant[randomQuoteNum]}`;
  }

  return (
    <div>
      <img
        src="/images/rickyfy-logo.png"
        alt="Rickyfy logo"
        style={logoStyle}
      />
      <img
        src="/images/ricky-quote-img.png"
        alt="ricky boy"
        style={rickyImgStyle}
      />
      <button className="rickyfybutton" onClick={() => getRickyQuote()}>
        Random rickyism
      </button>
      <p style={rickyQuoteStyle} id="ricky-quote"></p>
      <p style={rickyQuoteStyle} id="right-quote"></p>
    </div>
  );
}

const logoStyle = {
  display: "block",
  margin: "0 auto",
  height: "72px",
  paddingLeft: "1vw",
  paddingBottom: "1vh",
};

const rickyImgStyle = {
  display: "block",
  margin: "0 auto",
  width: "256px",
  height: "256px",
};

const rickyQuoteStyle = {
  textAlign: "center",
  fontSize: "24px",
};

export default App;
