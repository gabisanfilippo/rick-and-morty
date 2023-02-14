import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --white: #ffffff;
    --black: #081f32;
    --grey-placeholder: rgba(0, 0, 0, 0.5);
    --color-one: #e3f2fd;
    --color-two: #2196F3;
    --color-three: #f2f2f7;
    --color-four: #8e8e93;
    --color-five: #FAFAFA;
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
  button, a{
    cursor: pointer;
    border: none;
  }
`;
