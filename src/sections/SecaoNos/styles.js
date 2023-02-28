import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_nos.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 50px 70px;

  @media(max-width: 1100px){
      font-size: 15px;   
      overflow-y: scroll;
  }

  @media(max-width: 600px){
    background-size: cover;
  }

  @media(max-width: 400px){
    padding: 50px 30px;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;

  @media(max-width: 1100px){
    flex-direction: column;
  }
`;

export const TextList = styled.ul`
  margin-top: 30px;
  margin-left: 50px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 500px;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;

  @media(max-width: 1100px){
    width: 100%;
  }

  @media(max-width: 500px){
    font-size: 15px;
    margin-left: 0;
    margin-top: 10px;
  }

`;

export const ItemList = styled.li`
  margin-bottom: 10px;
`;

export const ContainerBackgroudTitle = styled.div`
  width: 100%;
  z-index: 1;
  bottom: 5px;
  position: relative;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  z-index: 2;
`;

export const BackgroudTitle = styled.h1`
  color: rgba(0, 0, 0, 0.2);
  font-family: 'Exo 2';
  font-size: 110px;
  text-align: center;
  bottom: -90px;
  z-index: 0;
  right: 40%;
  position: absolute; 
  z-index:0;
  scroll-behavior: smooth;

  @media(max-width: 2800px){
    right: 45%;
  }

  @media(max-width: 2500px){
    right: 40%;
  }

  @media(max-width: 1100px){
    font-size: 90px;
    right: 40%;
  }  

  @media(max-width: 1000px){
    font-size: 90px;
    right: 40%;
  }

  @media(max-width: 800px){
    font-size: 90px;
    right: 30%;
  }

  @media(max-width: 510px){
    font-size: 80px;
    right: 35%;
  }

  @media(max-width: 400px){
    font-size: 80px;
    right: 25%;
  }
`;