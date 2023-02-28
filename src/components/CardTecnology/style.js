import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'

export const ContainerCard = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1060px){
    width: 200px;
    height: 350px;
  }

  @media(max-width: 800px){
    width: 150px;
    height: 300px;
  }

  @media(max-width: 650px){
    width: 110px;
    height: 250px;
  }

  @media(max-width: 500px){
    width: 90px;
    height: 200px;
  }

`;

export const CircleBackground = styled.div`
  background-color: #fff;
  background-image: url(${props => props.image});
  background-size: ${props => props.name == 'Typescript' ? `${150}px ${150}px` : '180px 180px'};
  background-repeat: no-repeat;
  background-position: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;

  @media(max-width: 1060px){
    width: 200px;
    height: 200px;
    background-size: ${props => props.name == 'Typescript' ? `${120}px ${120}px` : '150px 150px'};
  }

  @media(max-width: 800px){
    width: 150px;
    height: 150px;
    background-size: ${props => props.name == 'Typescript' ? `${100}px ${100}px` : '120px 120px'};
  }

  @media(max-width: 650px){
    width: 110px;
    height: 110px;
    background-size: ${props => props.name == 'Typescript' ? `${70}px ${70}px` : '80px 80px'};
  }

  @media(max-width: 500px){
    width: 90px;
    height: 90px;
    background-size: ${props => props.name == 'Typescript' ? `${50}px ${50}px` : '60px 60px'};
  }

`;

export const Text = styled.p`
  margin-top: 20px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  @media(max-width: 900px){
    font-size: 20px;
  }

  @media(max-width: 400px){
    font-size: 15px;
    font-weight: bold;
  }
`;