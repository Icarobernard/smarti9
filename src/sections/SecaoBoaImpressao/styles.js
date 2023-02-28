import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_boa_impressao.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 200px 70px 100px 70px;
  display: flex;
  flex-direction: column;

  @media(max-width: 1400px){
    padding: 300px 70px 0 70px;
  }

  @media(max-width: 1350px){
    padding: 300px 70px 0 70px;
  }

  @media(max-width: 1000px){
    padding: 200px 70px 0 70px;
  }

  @media(max-width: 500px){
    padding: 200px 70px 0 70px;
  }

  @media(max-width: 400px){
    padding: 200px 30px 0 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;

  @media(max-width: 1350px){
    flex-direction: column;
    align-items: center
  }
`;

export const Subtitle = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const TextSubtitle = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 70%;
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  @media(max-width: 800px){
    width: 100%
  }
`;

export const Container = styled.div`
  width: 48%;
  display: flex;
  min-width: 600px;
  margin-top: 50px;

  @media(max-width: 1350px){
    width: 80%;
    margin-bottom: 30px;
    min-width: 0px
  }

  @media(max-width: 800px){
    width: 100%
  }

  @media(max-width: 600px){
    flex-direction: column;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerTextsTitle = styled.h2`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 30px;
  text-align: center;
  
`;

export const ContainerText = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: justify;
`;

export const ContainerBackgroudTitle = styled.div`
  width: 100%;
  z-index: 1;
  bottom: 5px;
  position: relative;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  z-index: 10;
`;

export const BackgroudTitle = styled.h1`
  color: rgba(45, 0, 59, 0.2);
  font-family: 'Exo 2';
  font-size: 110px;
  text-align: center;
  bottom: -90px;
  z-index: 0;
  right: 27%;
  position: absolute; 
  z-index:0;

  @media(max-width: 2800px){
    right: 35%;
  }

  @media(max-width: 2500px){
    right: 30%;
  }

  @media(max-width: 1800px){
    right: 25%;
  }

  @media(max-width: 1400px){
    font-size: 80px;
    bottom: -70px;
  }

  @media(max-width: 1000px){
    right: 20%;
  }

  @media(max-width: 820px){
    right: 15%;
  }

  @media(max-width: 750px){
    right: 10%;
  }


  @media(max-width: 650px){
    font-size: 60px;
    bottom: -60px;
    right: 5%;
  }
 
  @media(max-width: 550px){
    right: 0%;
    color: rgba(68, 28, 110, 0.2);
  }

  @media(max-width: 500px){
    font-size: 50px;
    bottom: -50px;
    right: 0%;
  }

    @media(max-width: 450px){
      font-size: 40px;
      bottom: -60px;
      right: 0%;
    }
`;