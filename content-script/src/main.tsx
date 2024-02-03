import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";

let body =  document.getElementById('player');
let data =  document.querySelector('#player-container-inner'); 

const app = document.createElement("div");

app.id = "root";


if (body) { 
  body.append(app);
}

console.log(body);

console.log(data);    

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
