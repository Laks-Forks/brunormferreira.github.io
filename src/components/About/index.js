import About from "../../content/about";

const photoURL = About.photo.match(/^htt(p|ps)/)
  ? photo
  : require("../../assets/images/" + About.photo);

export default function About() {
  return {
    render: async () => {},
    after: async () => {},
  };
}
