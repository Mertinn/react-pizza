import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import LucidaGrande from "./assets/LucidaGrande.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lucida Grande';
    src: url(${LucidaGrande}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lucida Grande", serif;
  }

  body {
    background: #a7a7a7;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
