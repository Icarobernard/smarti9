import React from 'react';
import Titulo from '~/src/components/Titulo';
import Image from 'next/image';
import {
  DivSecao, 
  Content, 
  ContainerBackgroudTitle, 
  ContainerTitle, 
  BackgroudTitle, 
  Subtitle, 
  TextSubtitle, 
  Container, 
  ContainerTexts, 
  ContainerTextsTitle, 
  ContainerText
} from './styles';
import productThink from '~/src/assets/SVGs/product_think.svg';
import productDesign from '~/src/assets/SVGs/product_design.svg';
import productDeveloper from '~/src/assets/SVGs/Product_developer.svg';
import aboutUs from '~/src/assets/SVGs/sobre_nos.svg';

function SecaoBoaImpressao(){
  return(
    <DivSecao id='secaoBoaImpressao'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>IMPRESSIONE</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Cause uma boa impressão</Titulo>
      </ContainerTitle>
      <Subtitle>
        <TextSubtitle>
          Você está preparado para construir o projeto que vai mudar a sua vida?
          Nós estamos! <br/><br/>

          Não perca mais tempo em apenas idealizar projetos web e mobile sem resultados, nós estamos aqui para garantir a 
          realização do seu empreendimento com qualidade, rapidez e interatividade digital.
        </TextSubtitle>
      </Subtitle>
      <Content>
        <Container>
          <Image src={productThink} width={300} height={300}/>
          <ContainerTexts>
            <ContainerTextsTitle>Product think</ContainerTextsTitle>
            <ContainerText>
              Buscamos entender a estrutura, políticas e operações de uma organização e recomendar 
              soluções que agregam valor para a empresa.
            </ContainerText>
          </ContainerTexts>
        </Container>
        <Container>
          <Image src={productDesign} width={300} height={300}/>
          <ContainerTexts>
            <ContainerTextsTitle>Design de produto</ContainerTextsTitle>
            <ContainerText>
              Combinamos design e tecnologia para construir soluções simples, seguras e de alto impacto. 
            </ContainerText>
          </ContainerTexts>
        </Container>
        <Container>
          <Image src={productDeveloper} width={300} height={300}/>
          <ContainerTexts>
            <ContainerTextsTitle>Desenvolvimento de produto</ContainerTextsTitle>
            <ContainerText>
              Rapidez e prazos quinzenais fazem parte do nosso cronograma. Depois de ter um 
              protótipo aprovado, iniciamos o desenvolvimento do produto. Buscando usar sempre 
              tecnologias de performance para atender da melhor forma os usuários finais.
            </ContainerText>
          </ContainerTexts>
        </Container>
        <Container>
          <Image src={aboutUs} width={300} height={300}/>
          <ContainerTexts>
            <ContainerTextsTitle>Suporte ao produto</ContainerTextsTitle>
            <ContainerText>
              Desenvolvemos soluções otimizadas para facilitar a vida do usuário e contribuir para que a 
              organização atinja seus objetivos estratégicos.
              Todo ajuste e correção levantado por usuários é levado de volta para o nosso time de 
              desenvolvedores, que será corrigido e enviado para publicação novamente.
            </ContainerText>
          </ContainerTexts>
        </Container>
      </Content>
      
    </DivSecao>
  );
}

export default SecaoBoaImpressao;