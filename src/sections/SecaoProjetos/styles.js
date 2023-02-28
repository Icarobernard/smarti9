import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_projetos.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding: 0 70px;
  background-color: ${colors.roxoEscuro};
  margin-top: -300px;

  @media(max-width: 1000px){
    background-size: cover;
  }

  @media(max-width: 670px){
    background-size: cover;
  }

  @media(max-width: 615px){
    background-size: cover;
  }
  @media(max-width: 600px){
    background-size: cover;
    background-position-y: 30px;
  }

  @media(max-width: 400px){
    padding: 0px 30px;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1200px){
    flex-direction: column;
  }
`;

export const TextProjects = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  margin-top: 100px;
  margin-bottom: 50px;

  @media(max-width: 1200px){
    margin-top: 100px;
    width: 100%;
    height: auto;
  }

  @media(max-width: 850px){
    margin-top: 50px;
  }
`;

export const BigText = styled.h1`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 40px;
  text-align: center;

  @media(max-width: 1200px){
    font-size: 30px;
  }
`;

export const SmallText = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;

  @media(max-width: 1200px){
    font-size: 15px;
  }
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
  color: rgba(77, 1, 100, 0.2);
  font-family: 'Exo 2';
  font-size: 110px;
  text-align: center;
  bottom: -90px;
  z-index: 0;
  right: 30%;
  position: absolute; 
  z-index:0;

  @media(max-width: 2800px){
    right: 40%;
  }

  @media(max-width: 2500px){
    right: 35%;
  }

  @media(max-width: 800px){
    font-size: 70px;
    right: 15%;
  }

  @media(max-width: 510px){
    font-size: 60px;
    right: 10%;
  }
`;