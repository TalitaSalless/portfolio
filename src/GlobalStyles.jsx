import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-color: #e8e8e8;        ;
        --secondary-color: #FDC435;
        --background-button:#1f1b1bf7;
        --text-color: #828282;
        --alert-color:#ff4d4d;
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
        background-image: url("/assets/back-new.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        ${'' /* background-image: url("/assets/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */}
    }

    body a {
        color: var(--primary-color);
        text-decoration: none;
        transition: 0.4s;
    }

    body ul {
        list-style: none;
    }
`;


