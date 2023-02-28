import styled from 'styled-components';
import {colors, fonts} from '~/src/styles/index'

export const NavigationBar = styled.div`
  background-color: ${colors.roxoEscuro};
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  padding: 20px 70px;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  z-index: 10000;

  @media(max-width: 1200px){
    Button{
      display: none;
    } 
  }

  @media(max-width: 400px){
    padding: 5px 30px;
  }

`;

export const Menu = styled.nav`
  @media(max-width: 800px){
    display: none;
  }
`;

export const SmallMenu = styled.nav`
  width: 160px;
  padding-top: 220px;
  position: absolute;
  right: 0;
  background-color: ${colors.roxoEscuro}; 
  border: solid 3px ${colors.verde};
  margin-right: 5px;
  text-align: center;
  border-radius: 0px 0px 10px 10px;
  display: ${props => props.theme.display};
  transition: 500ms;

  @media(max-width: 800px){
    display: ${props => props.theme.display};
  }
`;

export const ListLinks = styled.ul`
`;

export const LinkOfLists = styled.li`
  list-style: none;
  font-family: ${fonts.fontFamily.poppins};
  text-decoration: none;
  color: ${colors.verde};
  font-weight: bold;
  font-size: 20px;
  margin: 5px 0px;
  cursor: pointer;
  height: 50px;

  &:hover{
    background-color: ${colors.verde};
    color: ${colors.roxoEscuro};
  }
`;

export const LinkNavigation = styled.a`
  font-family: ${fonts.fontFamily.poppins};
  text-decoration: none;
  color: ${colors.verde};
  font-weight: bold;
  font-size: 20px;
  margin: 0px 20px;
  cursor: pointer;

  @media(max-width: 960px){
    margin: 0 15px;
  }

  @media(max-width: 450px){
    margin: 0 5px;
    font-size: 15px
  }
`;

export const Button = styled.button`
  background-color: ${colors.verde};
  width: 120px;
  height:50px;
  color: ${colors.roxoEscuro};
  font-weight: bold;
  font-size: 15px;
  border: none;
  border-radius:50px;
  box-shadow: 2px 2px 3px 1px ${colors.verde};
  font-family: ${fonts.fontFamily.poppins};
  cursor: pointer;
  margin-left: 50px;
  transition: 200ms;

  &:active{
    transform: scale(1.1) rotateX(20deg);
  }
  
`;

export const ButtonSmallMenu = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: ${colors.verde};
  padding: 10px;
  display: none;
  
  @media(max-width: 800px){
    display: block;
    margin-right: ${props => props.theme.rigth};
  }

  @media(max-width: 600px){
    margin-right: ${props => props.theme.rigth};
    display: block;
  }

  @media(max-width: 540px){
    display:  ${props => props.theme.display};
  }

  @media(max-width: 360px){
    width: 40px;
    height: 40px;
    
  }
  
`;

export const ContainerImage = styled.div`
  @media(max-width: 600px){
    margin-right: ${props => props.theme.rigth};
  }

  @media(max-width: 400px){
    margin-right: ${props => props.theme.rigth};
  }
`;