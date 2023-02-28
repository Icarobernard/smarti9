import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{ 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    box-sizing: content-box;
    background-Color: #2D003B;
  }

  body{
    width: 100vw;
    box-sizing: content-box;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;