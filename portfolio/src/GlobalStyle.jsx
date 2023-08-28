import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'M PLUS Rounded 1c', sans-serif;
   }
   #root{
      --bg-color: #E36F74;
      --second-bg-color: #F99787;
      --text-color: #FDB37C;
      --main-color: #E3906F;   
   }

   html {
      font-size: 62.5%;
      overflow-x: hidden ;
   }

   body {
      background: var(--bg-color);
      color: var(--text-color);
   }
`;
