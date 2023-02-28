import styled from 'styled-components';
import {colors, fonts} from '~/src/styles'
import backgroudImage from '~/src/assets/Imagens/secao_contato.png';


export const DivSecao = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${backgroudImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px 70px 50px 70px;
  display: flex;
  flex-direction: column;
  margin-top: -10px;
  
  @media(max-width: 600px){
    background-size: cover;
    padding: 0px 50px 0 50px;
  }

  @media(max-width: 400px){
    padding: 0px 30px 0 30;  
  }
`;

export const Content = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const Input = styled.input`
  width: 90%;
  height: 50px;
  background-color: rgba(68, 28, 110, 0.5);
  color: rgba(236, 229, 229, 0.5);
  font-family: ${fonts.fontFamily.poppins};
  font-size: 25px;
  text-align: left;
  border: none;
  font-weight: bold;
  margin-bottom: 50px;
  padding-left: 20px;

  @media(max-width: 1200px){
    font-size: 20px;
  }

  @media(max-width: 700px){
    width: 90%;
    font-size: 15px;
    margin-bottom: 25px;
    text-align: left;
    padding-left: 5px;
  }
`;

export const TextArea =  styled.textarea`
  width: 90%;
  height: 300px;
  background-color: rgba(68, 28, 110, 0.5);
  color: rgba(236, 229, 229, 0.5);
  font-family: ${fonts.fontFamily.poppins};
  font-size: 25px;
  text-align: center;
  border: none;
  font-weight: bold;
  margin-bottom: 50px;
  padding: 10px 0 0 10px;

  @media(max-width: 1200px){
    font-size: 20px;

  }

  @media(max-width: 700px){
    font-size: 15px;
    margin-bottom: 25px;
    text-align: left;
    padding-left: 5px;
  }

`;

export const Text = styled.p`
  margin-top: 30px;
  color: ${colors.corDoTexto};
  font-family: ${fonts.fontFamily.poppins};
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  @media(max-width: 500px){
    font-size: 15px;
  }
`;

export const Button = styled.button`
  display: ${props => props.theme.display};
  background-color: ${colors.verde};
  width: 200px;
  height:50px;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${colors.roxoEscuro};
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius:50px;
  box-shadow: 2px 2px 3px 1px ${colors.verde};
  font-family: ${fonts.fontFamily.poppins};
  cursor: pointer;
  transition: 200ms;

  &:active{
    transform: scale(1.1) rotateX(20deg);
  }

  @media(max-width: 400px){
    width: 150px;
    font-size: 15px;
  }  
  
`;

export const LoadingButton = styled.div`
  display: ${props => props.theme.display};
  animation: is-rotating 1s infinite;
  border: 6px solid ${colors.roxoEscuro};
  border-radius: 50%;
  border-top-color: ${colors.verde};
  height: 50px;
  width: 50px;
  margin-bottom: 20px;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;

export const ContainerCaptcha = styled.div`
   display: ${props => props.theme.display};
`;

export const ContainerBackgroudTitle = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;

  @media(max-width: 1500px){
    margin-top: 100px;
  }  
`;

export const ContainerTitle = styled.div`
  width: 100%;
  z-index: 10;
`;

export const BackgroudTitle = styled.h1`
  color: rgba(68, 28, 110, 0.2);
  font-family: 'Exo 2';
  font-size: 90px;
  text-align: center;
  bottom: -90px;
  z-index: 0;
  right: 30%;
  position: absolute; 
  z-index:0;

  @media(max-width: 2800px){
    right: 30%;
  }


  @media(max-width: 2500px){
    right: 30%;
  }

  @media(max-width: 2200px){
    right: 25%;
  }

  @media(max-width: 2000px){
    right: 20%;
  }

  @media(max-width: 2000px){
    font-size: 80px;
    right: 25%;
  }

  @media(max-width: 1500px){
    font-size: 80px;
    right: 25%;
    bottom: -80px;
  }

  @media(max-width: 1200px){
    font-size: 70px;
    bottom: -50px;
    right: 15%;
  }

  @media(max-width: 1000px){
    right: 5%;
    bottom: -65px;
  }

  @media(max-width: 800px){
    right: 0%;
    bottom: -65px;
  }

  @media(max-width: 700px){
    font-size: 50px;
    right: 5%;
    bottom: -60px;
  }

  @media(max-width: 600px){
    right: 5%;
  }

  @media(max-width: 500px){
    font-size: 40px;
    bottom: -50px;
  }

  @media(max-width: 415px){
    font-size: 40px;
    bottom: -45px;
    right: 3%;
  }
`;