import imagem from '~/src/assets/SVGs/sobre_nos.svg';
import Image from 'next/image';
import Titulo from '~/src/components/Titulo';
import {DivSecao, Content, TextList, ItemList, ContainerTitle, ContainerBackgroudTitle, BackgroudTitle} from './styles'

function SecaoNos() {
  return(
    <DivSecao id='secaoNos'>
      <ContainerBackgroudTitle>
        <BackgroudTitle>NÓS</BackgroudTitle>
      </ContainerBackgroudTitle>
      <ContainerTitle>
        <Titulo>Somos a equipe que procura?</Titulo>
      </ContainerTitle>
      <Content>
        <TextList>
          <ItemList>
            Acreditamos que um bom design é a chave fundamental para o sucesso de um produto digital.
          </ItemList>
          <ItemList>
            Cuidamos do seu orçamento, buscando adequar o projeto de acordo com as suas necessidades.
          </ItemList>
          <ItemList>
            Nosso foco é entender o que nossos clientes precisam e, assim, melhorar e otimizar a experiência do usuário.
          </ItemList>
          <ItemList>
            Trabalhamos lado a lado com os nossos clientes, tornando-os parte de todo o processo e, assim, temos uma visão 
            clara do que fazemos em cada etapa.
          </ItemList>
          <ItemList>
            Nossa equipe é formada por pessoas que já trabalharam em diversos setores e trazemos toda a nossa experiência 
            para os projetos.
          </ItemList>
          <ItemList>
            Trabalhamos em integrações com todos os tipos de sistemas.
          </ItemList>
        </TextList>
        <Image src={imagem} width={900} height={600} />
      </Content>
    </DivSecao>
  );
}

export default SecaoNos;