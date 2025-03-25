import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #FFFFFF;
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
        color: var(--primary-color);
        background-image: url("./src/assets/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    body a {
        color: var(--primary-color);
        text-decoration: none;
        transition: 0.4s;
    }

    body ul {
        list-style: none;
    }

    footer {
        background-image: url("./src/assets/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
        span {
            font-weight: bold;
            color: var(--secondary-color);
        }
    }
`;

export default GlobalStyle;
