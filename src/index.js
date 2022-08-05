import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game";
import "./sass/main.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Game />);
