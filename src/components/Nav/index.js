import "./styles.scss";

import { queryAll, query } from "../../utils";

import { getEmbla } from "../Embla";

import About from "../../content/about";

let { logotipo } = About;

let useColored = logotipo.match(/\./g);

let colored, start, end;

if (useColored) {
  const parts = logotipo.split(".");

  const divIndex = Math.floor(parts.length / 2);

  [colored] = parts.filter((item, i) => i === divIndex);
  start = parts.filter((item, i) => i < divIndex);
  end = parts.filter((item, i) => i > divIndex);
}

export default function Nav() {
  return {
    render: async () => {
      const html = `
            <nav class="nav-wrapper">
                <div class="nav__container">
                    <a class="nav__logotipo__wrapper">
                        ${
                          useColored
                            ? `
                        <p class="nav__logotipo">${start.join(".")}.</p>
                        <p class="nav__logotipo--colored">${colored}</p>
                        <p class="nav__logotipo">.${end.join(".")}</p>
                        `
                            : `
                            <p class="nav__logotipo">${About.logotipo}</p>
                        `
                        }
                    </a>
                    
                    <div class="nav-buttons">
                        <a index="0" class="nav-buttons__button nav-buttons__button--active" href="#">about</a>
                        <a index="1" class="nav-buttons__button" href="#">skills</a>
                    </div>
                </div>
            </nav>
        `;

      return html;
    },
    after_render: async () => {
      const embla = getEmbla();

      const buttons = queryAll(".nav-buttons__button");

      let currentIndex = 0;

      const setCurrentIndex = (newIndex) => {
        if (newIndex === currentIndex) return;

        if (embla.selectedScrollSnap().toString() !== newIndex)
          embla.scrollTo(Number(newIndex));

        currentIndex = newIndex;

        for (const button of buttons) {
          if (button.getAttribute("index") === currentIndex)
            button.classList.add("nav-buttons__button--active");
          else button.classList.remove("nav-buttons__button--active");
        }
      };

      for (const button of buttons) {
        button.onclick = (e) => {
          setCurrentIndex(e.target.getAttribute("index"));
        };
      }

      query(".nav__logotipo__wrapper").onclick = (e) => setCurrentIndex("0");

      embla.on("select", () => {
        setCurrentIndex(embla.selectedScrollSnap().toString());
      });
    },
  };
}
