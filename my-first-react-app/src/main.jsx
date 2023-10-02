import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./greet.jsx";
import GetList from "./list.jsx";
import Bio from "./bio.jsx";
import Avatar from "./pic.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <Greeting />
    <GetList />
    <Bio />
    <Avatar />
  </React.StrictMode>
);
