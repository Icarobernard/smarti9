import React, {useState} from 'react';
import Image from 'next/image';
import logo from '../../assets/logos/logo_smarti9.png';
import menuIcon from '../../assets/icones/menu-icon.svg'
import {NavigationBar, LinkNavigation, Button, Menu, SmallMenu, LinkOfLists, ListLinks, ButtonSmallMenu, ContainerImage} from './style';
import {Link} from 'react-scroll';

function NavBar(){
  const [menuEnable, setMenuEnable] = useState(false);

  function handleMenuEnable(){
    setMenuEnable(!menuEnable);
  }


    return(
      <NavigationBar >
        <ContainerImage theme={{rigth: menuEnable ? '140px' : 0}}>
          <Image src={logo} width={200} height={70} quality={100}/>
        </ContainerImage>
        <ButtonSmallMenu onClick={handleMenuEnable} theme={{rigth: menuEnable ? '130px' : 0, display: menuEnable ? 'none' : 'block'}}>
          <Image src={menuIcon} width={50} height={50} />
        </ButtonSmallMenu>
        <Menu>
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <LinkNavigation>HOME</LinkNavigation>
          </Link>
          <Link
            activeClass="active"
            to="secaoNos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >  
            <LinkNavigation>NÓS</LinkNavigation>
          </Link>
          <Link
            activeClass="active"
            to="secaoFintechs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <LinkNavigation>FINTECHS</LinkNavigation>
          </Link>
          <Link
            activeClass="active"
            to="secaoProjetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >  
            <LinkNavigation>SERVIÇOS</LinkNavigation>
          </Link>
          <Link
            activeClass="active"
            to="secaoTecnologias"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >  
            <LinkNavigation>TECNOLOGIAS</LinkNavigation>
          </Link>
            <Button>
              <Link
                activeClass="active"
                to="secaoContato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >  
                CONTATO
              </Link>
              </Button>
        </Menu>
        <SmallMenu theme={{display: menuEnable ? 'block' : 'none'}}>
          <ListLinks>
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >
              <LinkOfLists>HOME</LinkOfLists>
            </Link>
            <Link
              activeClass="active"
              to="secaoNos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >  
              <LinkOfLists>NÓS</LinkOfLists>
            </Link>
            <Link
              activeClass="active"
              to="secaoFintechs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >
              <LinkOfLists>FINTECHS</LinkOfLists>
            </Link>
            <Link
              activeClass="active"
              to="secaoProjetos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >  
              <LinkOfLists>SERVIÇOS</LinkOfLists>
            </Link>
            <Link
              activeClass="active"
              to="secaoTecnologias"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >  
              <LinkOfLists>TECNOLOGIAS</LinkOfLists>
            </Link>
            <Link
              activeClass="active"
              to="secaoContato"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={handleMenuEnable}
            >  
              <LinkOfLists>CONTATO</LinkOfLists>
            </Link>
            </ListLinks>
        </SmallMenu>
      </NavigationBar>
    );
}

export default NavBar;