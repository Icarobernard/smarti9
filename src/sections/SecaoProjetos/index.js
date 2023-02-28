import React from 'react';
import Titulo from '~/src/components/Titulo';
import Texto from '~/src/components/Texto';
import {DivSecao, Content, TextProjects, BigText, SmallText, ContainerBackgroudTitle, ContainerTitle, BackgroudTitle} from './styles';

function SecaoProjetos() {
  return(
    <DivSecao id='secaoProjetos'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>PROJETOS</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Precisando desenvolver um projeto?</Titulo>
      </ContainerTitle>
      <Texto>Estamos prontos para lhe atender em projetos para web, mobile e outsourcing.</Texto>
      <Content>
        <TextProjects>
          <BigText>Aplicações mobile</BigText>
          <SmallText>
            Transforme a maneira como você apresenta e oferece seu produto ou negócio para seus clientes e colaboradores. 
            Construímos, replicamos e otimizamos aplicativos mobile iOS, Android e também em linguagens híbridas.<br/>
            Seja INTELIGENTE e PROATIVO no mercado.
            Nós temos a ferramenta digital certa para sua empresa
          </SmallText>
        </TextProjects>
        <TextProjects>
          <BigText>Sistemas Web</BigText>
          <SmallText>
            Da ideação até a efetiva construção da solução, nós estamos prontos para te ajudar a crescer. Temos o conhecimento 
            e as ferramentas necessárias para cocriar seu produto digital, seja para uso interno no seu negócio ou para ganhar o mercado.<br/>
            Permita ao seu negócio um crescimento exponencial através de uma nova ou melhorada aplicação web ou desktop.<br/>
            Iremos utilizar a melhor linguagem e ferramentas para sua aplicação.

          </SmallText>
        </TextProjects>
        <TextProjects>
          <BigText>Outsourcing</BigText>
          <SmallText>
            O trabalho acontece nas mãos dos nossos times especializados, mas com acompanhamento e participação total de quem nos contrata. 
            Isso faz toda a diferença na entrega e futuro do projeto.<br/>
            Estamos curiosos e animados para conhecer melhor você e sua empresa.<br/>
            Economize recursos e tempo precioso trabalhando com os melhores especialistas do mercado, sempre com total transparência e 
            controle.

          </SmallText>
        </TextProjects>
      </Content>
    </DivSecao>
  );
}

export default SecaoProjetos;