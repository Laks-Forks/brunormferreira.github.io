import "./scss/app.scss";

import { getById } from "./utils";

import Embla from "./components/Embla";
import Nav from "./components/Nav";

addEventListener("DOMContentLoaded", async () => {
  const root = getById("root");

  const embla = Embla();
  const nav = Nav();

  root.innerHTML += await embla.render();
  root.innerHTML += await nav.render();
});
