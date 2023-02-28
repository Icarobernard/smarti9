import styled from 'styled-components';
import {colors, fonts} from '~/src/styles/index'

export const TextoTitulo = styled.h1`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 50px;
  text-align: center;

  @media(max-width: 1100px){
      font-size: 35px;   
  }
`;

