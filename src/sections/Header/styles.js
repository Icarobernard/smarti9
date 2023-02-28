import styled from 'styled-components';
import {colors, fonts} from '~/src/styles/index'

export const SecaoHeader = styled.div`
  height: 100vh;
  background-color: ${colors.roxoEscuro};
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 70px;
  margin-top: 128px;

  @media(max-width: 1000px){
    flex-direction: column;
  }

  @media(max-width: 400px){
    padding: 50px 30px;
  }
`;

export const DivTextos = styled.div`
  text-align: left;
  width: 50%;

  @media(max-width: 1000px){
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }
`;

export const TitleHeader = styled.h1`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 30px;
  text-align: left;

  @media(max-width: 1000px){
    text-align: center;
  }
`;

export const Text = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: left;

  @media(max-width: 1000px){
    text-align: center;
  }
`;