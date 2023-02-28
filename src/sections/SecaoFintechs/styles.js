import styled from 'styled-components';
import {colors, fonts} from '~/src/styles';
import dollarSymbol from '~/src/assets/Imagens/dollar-symbol.png';

export const DivSecao = styled.div`
  margin-top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${colors.roxoEscuro};
  padding: 50px 70px 0;

  @media(max-width: 400px){
    padding: 50px 30px 0;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1500px){
    flex-direction: column
  }

`;

export const ContainerDollarSymbols = styled.div`
  height: auto;
  width: 250px;
  position: absolute;
  background-image: url(${dollarSymbol});
  background-repeat: repeat-y;
  margin-top: -150px;
`;

export const Text = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  @media(max-width: 1550px){
  }
`;

export const ContainerText = styled.div`
  width: 50%;
  padding-left: 100px;

  @media(max-width: 1550px){
    width: 100%;
  }

  @media(max-width: 500px){
    width: 100%;
    padding-left: 0px;
  }
`;

export const BigText = styled.h1`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 700px;
  font-size: 40px;
  text-align: left;
  
  &:nth-child(3){
    margin-top: 100px;
  }

  @media(max-width: 1550px){
    width: 100%;
  }

`;

export const SmallText = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 700px;
  font-size: 20px;
  font-weight: 300;

  @media(max-width: 1550px){
    width: 100%;
  }

  @media(max-width: 500px){
    font-size: 15px;
  }
`;

export const ContainerImage = styled.div`
  padding-top: 100px;
  display: flex;

  @media(max-width: 1500px){
    justify-content: center
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
  color: rgba(68, 28, 110, 0.2);
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
    right: 40%;
  }

  @media(max-width: 2000px){
    right: 35%;
  }

  @media(max-width: 1500px){
    font-size: 80px;
    right: 35%;
  }
  
  @media(max-width: 1100px){
    font-size: 90px;
    bottom: -70px;
    right: 25%;
  }

  @media(max-width: 800px){
    font-size: 90px;
    bottom: -70px;
    right: 20%;
  }

  @media(max-width: 700px){
    right: 10%;
  } 

  @media(max-width: 570px){
    font-size: 60px;
    bottom: -60px;
    right: 15%;
  } 

  @media(max-width: 400px){
    font-size: 60px;
    bottom: -60px;
    right: 5%;
  } 

`;