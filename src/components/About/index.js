import about from "../../content/about";

import "../../assets/images/*.jpg";
const photoURL = about.photo.match(/^htt(p|ps)/)
  ? photo
  : require("../../assets/images/" + about.photo).default;

export default function About() {
  return {
    render: async () => {
      const html = `
        <p style="color: white">ABOUT COMPONENT</p>
        <img src="${photoURL}" width="100">
      `;

      return html;
    },
    after_render: async () => {},
  };
}
