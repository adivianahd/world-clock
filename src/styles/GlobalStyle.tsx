import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  
  body {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;

    background-image: radial-gradient(${(p) =>
      p.theme.primaryColor} 1px, transparent 1px), radial-gradient(${(p) =>
      p.theme.secondaryColor} 2px, transparent 1px);
    background-color: ${(p) => p.theme.backgroundColor};
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px;
  }
`;

export default GlobalStyle;
