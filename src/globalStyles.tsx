import { createGlobalStyle } from 'styled-components';
import { Colors } from 'modules/colors';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica', 'Helvetica Neue', 'Segoe UI', 'Proxima Nova', 'Roboto', 'Open Sans', 'Droid Sans', 'Arial', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 1.4;
  }

  html,
  body,
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a {
    color: ${Colors.black};
    cursor: pointer;
    text-decoration: none;
  }
  
  a:active,
  a:focus,
  a:hover,
  a:visited {
    text-decoration: none;
    color: #036;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: square;
  }
`;
