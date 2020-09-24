// Global style for styled components.
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    --primary: #102A43;
    --disabled: #bdbdbd;
    --success: #00897B;
    --info: #ffaa00;
    --warning:#c63828;
    --main-dark-2:#102a43;
    --main-dark-1:#486581;
    --main: #d9e2ec;
    --main-light-1: #F0f4f8;
    --main-light-2: #f1f1f1;
  }
  body {
    font-family: 'Mulish';
  }
`;

export default GlobalStyle;
