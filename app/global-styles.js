import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f0f0f0;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Abel;
    font-weight:bold;
    line-height: 1.5em;
    font-size:1.7em;
    color:#606060;
  }
`;

export default GlobalStyle;
