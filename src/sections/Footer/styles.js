import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'

export const DivFooter = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${colors.verde};
    padding: 0 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -5px; 

    @media(max-width: 400px){
      padding: 0 30px;
    }
  `;

export const Icons =  styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  `;

export const Text = styled.p`
    color: ${colors.roxoMedio};
    font-size: 20px;
    font-family: ${fonts.fontFamily.poppins};
    text-align: center;
  `;

export const Link = styled.a`
    font-family: ${fonts.fontFamily.poppins};
    text-decoration: none;
    color: ${colors.azul};
    cursor: pointer;
    text-align: center;
`;

export const SocialMediaLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;