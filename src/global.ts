import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --shape: #ffffff;

        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        @media (max-width: 420px) {
            font-size: 81%;
        }

        @media (max-width: 375px) {
            font-size: 70%;
        }
    }

    body, textarea, input, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display:flex;
        align-items: center;
        justify-content: center;

    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            /* filter: brightness(0); */
            filter: invert(18%) sepia(100%) saturate(2202%) hue-rotate(334deg) brightness(113%) contrast(87%);
        }
    }
`