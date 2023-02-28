import React from 'react';
import Titulo from '~/src/components/Titulo';
import Texto from '~/src/components/Texto';
import CardTecnology from '~/src/components/CardTecnology';
import logoDocker from '~/src/assets/SVGs/Tecnologias/logo-Docker.svg';
import logoAws from '~/src/assets/SVGs/Tecnologias/logo-aws.svg';
import logoMongoDb from '~/src/assets/SVGs/Tecnologias/logo-mongodb.svg';
import logoMySql from '~/src/assets/SVGs/Tecnologias/logo-mysql.svg';
import logoTypeScript from '~/src/assets/SVGs/Tecnologias/logo-typescript.svg';
import logoReact from '~/src/assets/SVGs/Tecnologias/logo-react.svg';
import logoNext from '~/src/assets/SVGs/Tecnologias/logo-next-js.svg';
import logoNode from '~/src/assets/SVGs/Tecnologias/logo-nodejs.svg';
import logoElasticSearch from '~/src/assets/SVGs/Tecnologias/logo-elasticsearch.svg';
import logoPhp from '~/src/assets/SVGs/Tecnologias/Logo-php.svg';
import logoJava from '~/src/assets/SVGs/Tecnologias/logo-java.svg';
import logoPostgree from '~/src/assets/SVGs/Tecnologias/logo-postgresql.svg';
import logoRedis from '~/src/assets/SVGs/Tecnologias/logo-redis.svg';
import {DivSecao, Content, BackgroudTitle, ContainerBackgroudTitle, ContainerTitle} from './styles';

function SecaoTecnologias(){
  return(
    <DivSecao id='secaoTecnologias'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>TECNOLOGIAS</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Nossas Tecnologias</Titulo>
      </ContainerTitle>
      <Texto>Aqui na Smarti9, nós usamos as tecnologias mais atuais do mercado.</Texto>
      <Content>
        <CardTecnology image={logoDocker} name='Docker'/>
        <CardTecnology image={logoAws} name='AWS'/>
        <CardTecnology image={logoMongoDb} name='MongoDB'/>
        <CardTecnology image={logoMySql} name='MySQL'/>
        <CardTecnology image={logoTypeScript} name='Typescript'/>
        <CardTecnology image={logoReact} name='React'/>
        <CardTecnology image={logoReact} name='React Native'/>
        <CardTecnology image={logoNext} name='Next.js'/>
        <CardTecnology image={logoNode} name='Node.js'/>
        <CardTecnology image={logoElasticSearch} name='Elastic Search'/>
        <CardTecnology image={logoPhp} name='Php'/>
        <CardTecnology image={logoJava} name='Java'/>
        <CardTecnology image={logoPostgree} name='PostgreeSQL'/>
        <CardTecnology image={logoRedis} name='Redis'/>
      </Content>
    </DivSecao>
  );
}

export default SecaoTecnologias;