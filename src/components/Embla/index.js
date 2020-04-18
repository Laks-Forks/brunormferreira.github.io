import "./styles.scss";

import EmblaCarousel from "embla-carousel";

import { query, getById } from "../../utils";

let embla = null;

const getEmbla = () => embla;

export { getEmbla };

export default function Embla() {
  return {
    render: async function () {
      const html = `
      <div id="embla__wrapper" class="embla">
        <div class="embla__container">
          <div class="embla__slide">
            Slide 1
          </div>
          <div class="embla__slide">
            Slide 2
          </div>
        </div>
      </div>
      `;
      return html;
    },
    after_render: async function () {
      embla = EmblaCarousel(getById("embla__wrapper"));
    },
  };
}
