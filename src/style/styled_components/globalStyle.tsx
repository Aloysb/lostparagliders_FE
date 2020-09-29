// Global style for styled components.
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    --primary: #303f9f;
    --disabled: #bdbdbd;
    --success: #00897B;
    --info: #ffaa00;
    --warning:#c63828;
    --main-dark-2:#102a43;
    --main-dark-1:#829AB1;
    --main: #d9e2ec;
    --main-light-1: #F0f4f8;
    --main-light-2: #f1f1f1;
    --logo: #02C19D;
    --border-radius: 0.25rem;
    font-size: 16px;
  }
  body {
    font-family: 'Mulish';
    background: var(--main-dark-2);
    background: linear-gradient(to bottom, var(--main-dark-2), #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .display{
    color: var(--main-light-1);
    /* font-size: calc(1rem * 4 / 3 * 4); */
    line-height: 110%;
    font-weight: 200;
    letter-spacing: -0.025em;
  }

  h1{
    color: var(--main-light-1);
    font-size: calc(1rem * 4 / 3 * 3);
    line-height: 115%;
  }

  h2{
    color: var(--main);
    font-size: calc(1rem * 4 / 3 * 2);
    line-height: 120%;
  }

  h3{
    color: var(--main-dark-1);
    font-size: calc(1rem * 4 / 3 * 1);
  }
`;

export default GlobalStyle;
