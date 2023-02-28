import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_cooperacao.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  margin-top: -2px;
  overflow-x: hidden;
  padding: 20px 70px 50px 70px;

  @media(max-width: 1100px){
      font-size: 15px;   
      overflow-y: scroll;
  }

  @media(max-width: 400px){
    padding: 0px 30px;
  }

`;

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1100px){
      flex-direction: column;
  }
`;

export const Text = styled.p`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 70%;
  font-size: 20px;
  font-weight: 300;

  @media(max-width: 1100px){
      width: 100%; 
      font-size: 15px
  }
`;

export const ContainerBackgroudTitle = styled.div`
  width: 100%;
  z-index: 1;
  right: -70px;
  bottom: 5px;
  position: relative;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  z-index: 2;
`;

export const BackgroudTitle = styled.h1`
  color: rgba(68, 28, 110, 0.2);
  font-family: 'Exo 2';
  width: 100%;
  font-size: 110px;
  text-align: center;
  bottom: -90px;
  z-index: 0;
  right: 70px;
  position: absolute; 
  z-index:0;

  @media(max-width: 1100px){
      font-size: 80px;   
      bottom: -70px;
  }

  @media(max-width: 1000px){
    right: 20%;
  }

  @media(max-width: 820px){
    right: 15%;
  }


  @media(max-width: 670px){
    font-size: 60px;
    bottom: -60px;
    right: 10%;
  }
 
  @media(max-width: 550px){
    right: 20%;
  }

  @media(max-width: 500px){
    font-size: 50px;
    bottom: -50px;
    right: 20%;
  }

  @media(max-width: 450px){
    font-size: 50px;
    bottom: -60px;
    right: 25%;
  }
`;