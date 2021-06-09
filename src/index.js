import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import './assets/stylesheets/style.scss';

export const BASE_URL = 'https://api.nasa.gov/planetary/apod?keJGfKsMKsmMZPDSLpdvoEfw8Zs7AmIF7nhilnd3'
export const API_KEY = 'keJGfKsMKsmMZPDSLpdvoEfw8Zs7AmIF7nhilnd3'

ReactDOM.render(<App />, document.getElementById("root"));
