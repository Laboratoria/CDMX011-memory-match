import { App } from "./components/App.js";
import { ButtonReset } from "./components/ButtonReset.js";
const root = document.getElementById("root");

root.appendChild(ButtonReset());
root.appendChild(App());
