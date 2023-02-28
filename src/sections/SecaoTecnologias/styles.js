import styled from 'styled-components';
import backgroudImage from '~/src/assets/Imagens/secao_tecnologias.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 70px 00px 70px;
  display: flex;
  flex-direction: column;
  margin-top: -20px;

  @media(max-width: 500px){
    padding: 50px 30px 0 30px;
    background-size: cover;
  }

  @media(max-width: 400px){
    padding: 50px 30px 0 30px;
  }
`;

export const Content = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
 
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


  @media(max-width: 670px){
    font-size: 60px;
    bottom: -60px;
    right: 5%;
  }
 
  @media(max-width: 550px){
    right: 0%;
  }

  @media(max-width: 500px){
    font-size: 50px;
    bottom: -50px;
    right: 0%;
  }

    @media(max-width: 450px){
      right: 0%;
    }
`;