import "./styles.scss";

export default function Nav() {
  return {
    render: async () => {
      const html = `
            <nav class="nav-wrapper">
                <div class="nav__container">
                    <p class="nav__link">About</p>
                </div>
            </nav>
        `;

      return html;
    },
    after_render: async () => {},
  };
}
