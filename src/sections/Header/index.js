
import imagem from '~/src/assets/SVGs/Home_header.svg';
import Image from 'next/image';
import { SecaoHeader, DivTextos, TitleHeader, Text } from './styles';


function Header() {
  return (
    <SecaoHeader id='header'>
      <DivTextos>
        <TitleHeader >Construímos muito mais do que apenas software, contruímos inovação!</TitleHeader>
        <Text>
          Criamos experiências inovadoras de resultado.
          Agregue valor a sua empresa e mantenha o foco no seu cliente. O resto deixa com a gente!
        </Text>
      </DivTextos>
      <Image src={imagem} width={900} height={600} />
    </SecaoHeader>
  );
}

export default Header;