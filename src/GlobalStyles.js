import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #F9FAFF;
        --secondary-color: #FDC435;
        --text-color: #828282;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Comfortaa", sans-serif;
    }

    body {
        height: 100vh;
        color: var(--text-color);
        background-image: url("./src/assets/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
    }

    body a {
        color: var(--text-color);
        text-decoration: none;
        transition: 0.4s;
    }

    body ul {
        list-style: none;
    }

    footer {
        text-align: center;
        padding-bottom: 2rem;
        span {
            font-weight: bold;
            color: var(--secondary-color);
        }
    }
`;

export default GlobalStyle;
