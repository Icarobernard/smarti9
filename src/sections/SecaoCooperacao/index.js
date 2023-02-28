import React from 'react';
import Titulo from '~/src/components/Titulo';
import imagem from '~/src/assets/SVGs/cooperacao.svg'
import Image from 'next/image';
import {DivSecao, Text, Content, ContainerTitle, ContainerBackgroudTitle, BackgroudTitle} from './styles';

function SecaoCooperacao(){
  return(
    <DivSecao>
      <ContainerBackgroudTitle>
        <BackgroudTitle>COOPERAÇÃO</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Cooperamos com a sua empresa</Titulo>
      </ContainerTitle>
      <Content>
      <Image src={imagem} width={900} height={600} />
        <Text>
        Possuímos uma equipe multidisciplinar de Outsourcing em desenvolvimento que está sempre se adequando às novas 
        skills que surgem no mercado, com o intuito de ficar sempre à frente para trazer soluções inovadoras aos nossos clientes!
        <br/><br/>
        Sua empresa tem um projeto e precisa de parceiro para desenvolvê-lo com qualidade, eficiência e agilidade? <br/><br/>

        A Smarti9 pode ser a solução ideal!<br/><br/>

        Com o mercado cada vez mais competitivo e exigindo o melhor de cada negócio, você vai querer que sua empresa tenha 
        os melhores recursos. Seja em software, aplicações web, mobile, temos grande experiência no mercado e estamos prontos 
        para atendê-lo, com uma equipe de profissionais capacitados para todas as suas demandas.<br/><br/>

        Venha conhecer a Smarti9 e descobrir como podemos ajudar!
        </Text>
        
      </Content>
    </DivSecao>
  );
}

export default SecaoCooperacao;