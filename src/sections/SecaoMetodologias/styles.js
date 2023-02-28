import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_metodologias.png';

export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  min-height: 1200px;
  background-image: url(${backgroudImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  padding: 0 70px;
  margin-top: -10px;
  margin-bottom: 50px;

  @media(max-width: 1000px){
    flex-direction: column;
    background-size: 100% 90%;
  }
  @media(max-width: 900px){
    background-size: 100% 500px;
  }

  @media(max-width: 600px){
    margin-bottom: 0
  }

  @media(max-width: 400px){
    padding: 0px 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  padding-top: 50px;
  margin-bottom: 100px;

  @media(max-width: 800px){
    flex-direction: column;
    padding-top: 100px;
  }
`;

export const ContainerTexts = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  flex-direction: column;

  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const ContainerImage = styled.div`
  padding-top: 100px;
  width: 40%;
  height: 50%;
  display: flex;
  margin-bottom: 30px;
  margin-top: 200px;

  @media(max-width: 1000px){
    padding-top: 0px;
    margin-top: 0px;
    width: 100%;
    justify-content: center;
  }

  @media(max-width: 500px){
    padding-top: 30px;
    width: 100%;
  }
`;

export const TextList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  line-height: 30px;
  padding-left: 25px;

  @media(max-width: 1000px){
    font-size: 20px;
    width: 100%;
    line-height: 20px;
    margin-top: 50px;
  }

  @media(max-width: 500px){
    font-size: 15px;
  }


`;

export const ItemList = styled.li`
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 50px;
  text-align: left;

  @media(max-width: 1000px){
    font-size: 40px;
  }

  @media(max-width: 500px){
    font-size: 30px;
    text-align: center;
  }

  @media(max-width: 400px){
    font-size: 25px;
    text-align: center;
  }

 
`;

