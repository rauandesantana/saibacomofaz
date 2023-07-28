import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    box-sizing: border-box;
    user-select: none;
    cursor: default;
  }
  
  body {
    background-color: #1f1f1f;
  }
`;