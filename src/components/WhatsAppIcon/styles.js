import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'

export const Container = styled.div`
  background-color: ${colors.verde};
  width: 70px;
  height: 70px;
  padding: 10px;
  bottom: 50px;
  right: 50px;
  border-radius: 15px;
  position: fixed;
  z-index: 99999;

  @media(max-width: 1000px){
    width: 50px;
    height: 50px;
    padding: 5px;
    bottom: 20px;
    right: 20px;
    border-radius: 15px;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;