import styled from 'styled-components';
import {colors, fonts} from '~/src/styles/index'

export const Slide = styled.div`
  width: 100vw;
  overflow: scroll;
`;

export const Imagens = styled.div`
  display: flex;
  transition: 1s;
`;

export const DivImage = styled.div`
  width: 100%;
  flex: none;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${colors.verde};
  color: ${colors.roxoEscuro};
  border-radius: 50px;
  border: none;
  position: absolute;
`;

export const InputRadio = styled.input`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: solid 4px ${colors.verde};
  margin-right: 20px;
  cursor: pointer;
  transition: 1s;
  float: right;

  &:hover {
    background-color: ${colors.verde};
  }

  &:checked ~ ${DivImage}{
    margin-right: 100%;
  }

`;


