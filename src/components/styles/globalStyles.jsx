import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Paytone One', cursive;
  }
  body {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;