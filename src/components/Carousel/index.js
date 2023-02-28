import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Imagem1 from '~/src/assets/Imagens/Banner_carousel.png';
import Imagem2 from '~/src/assets/Imagens/Banner_carousel2.png';
import {Slide,Imagens, DivImage, Button, InputRadio} from './style';

function Carousel() {
  const imagens = [
    {imagem: Imagem1, selected: true},
    {imagem: Imagem2, selected: false}
  ];
 

  return(
    <Slide>
        <InputRadio name='imagemSelecionada' type='radio'/>
        <InputRadio name='imagemSelecionada'  type='radio'/>
      <Imagens>
        <DivImage>
          <Image src={imagens[0].imagem} width={2600} height={1200} />;
        </DivImage>
        <DivImage>
          <Image src={imagens[1].imagem} width={2600} height={1200} />;
        </DivImage>
      </Imagens>
    </Slide>
  )

}

export default Carousel;