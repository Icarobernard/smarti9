import imagem from '~/src/assets/SVGs/fintech.svg';
import Image from 'next/image';
import Titulo from '~/src/components/Titulo';
import {
  DivSecao, 
  Text, 
  Content, 
  ContainerDollarSymbols, 
  ContainerText, 
  BigText, 
  SmallText, 
  ContainerImage, 
  ContainerTitle, 
  ContainerBackgroudTitle, 
  BackgroudTitle} 
  from './styles'


function SecaoFintechs(){
  return(
    <DivSecao id='secaoFintechs'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>FINTECHS</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Fintechs</Titulo>
      </ContainerTitle>
        <Text>Na Smarti9, damos suporte na criação da sua própria Fintech.</Text>
        <Content>
          <ContainerDollarSymbols />
          <ContainerText>
            <BigText>O que são fintechs?</BigText>
            <SmallText>
              Fintech é um termo derivado da junção de Finances e Technology. São empresas que usam a tecnologia para prover soluções 
              financeiras para seus clientes. <br/><br/>

              No Brasil temos algumas fintechs que já fazem sucesso no mercado, como a Nubank, Banco Inter, Toro Investimentos, entre outras.
            </SmallText>

            <BigText>Você será a nova fintech de sucesso?</BigText>
            <SmallText>
              Na Smarti9 você vai poder criar seu próprio site, sistema e aplicativo para concretizar seu negócio e entrar no mercado das 
              fintechs. Nossa equipe está preparada para por em prática suas ideias e te ajudar a crescer!
            </SmallText>
          </ContainerText>
          <ContainerImage>
            <Image src={imagem} width={600} height={400} />
          </ContainerImage>
        </Content>
    </DivSecao>
  );
}

export default SecaoFintechs;