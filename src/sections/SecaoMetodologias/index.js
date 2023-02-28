import imagem from '~/src/assets/SVGs/Agile_scrum.svg';
import Image from 'next/image';
import {DivSecao, Content, Title, TextList, ItemList, ContainerImage, ContainerTexts} from './styles';

function SecaoMetodologias(){
  return(
    <DivSecao id='secaoMetodologias'>
      <Content>
        <ContainerTexts>
        <Title>Em cada etapa aplicamos as metodologias AGILE Scrum | Kanban</Title>
        <TextList>
          <ItemList>
            Melhora a qualidade do plano a ser executado.
          </ItemList>
          <ItemList>
            Ele se encontra a experiência do usuário.
          </ItemList>
          <ItemList>
            Oferece transparência.
          </ItemList>
          <ItemList>
            Preveja custos de execução.
          </ItemList>
          <ItemList>
            Permite mudanças em cada etapa do projeto.
          </ItemList>
        </TextList>
        </ContainerTexts>
        <ContainerImage>
          <Image src={imagem} width={900} height={600} />
        </ContainerImage>
      </Content>
      
    </DivSecao>
  );
}

export default SecaoMetodologias;