import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        color: var(--color-normal);
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        --dark: #1a1c22;
        --light: #31363f;

        --color-normal: #9da5b4;
        --color-hovered: #f5f5f5;
        --color-primary: #85cff9;

        --font-normal: 14px;
        --font-small: 10px;
        --font-big: 24px;

        --transition: all 0.2s ease-in-out;

        height: 100%;
    }
    #root {
        background: var(--dark);

        height: 100%;
        min-height: 580px;

        display: flex;
        flex-direction: column;
    }
`;
