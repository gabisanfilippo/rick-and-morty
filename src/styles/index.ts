import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --white: #ffffff;
    --black: #000000;
    --grey-placeholder: rgba(0, 0, 0, 0.5);
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`;
