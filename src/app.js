import "./scss/app.scss";

import { getById } from "./utils";

import Nav from "./components/Nav";
import Embla from "./components/Embla";

addEventListener("DOMContentLoaded", async () => {
  const root = getById("root");

  const nav = Nav();
  const embla = Embla();

  root.innerHTML += await nav.render();
  root.innerHTML += await embla.render();

  await embla.after_render();
  await nav.after_render();
});
