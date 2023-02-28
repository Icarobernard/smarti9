import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import wppIcon from '~/src/assets/icones/icone_wpp.png';
import {Container, Link} from './styles';

function WhatsAppIcon() {

  return(
    <Link href='https://api.whatsapp.com/send?phone=5532984943333&text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto.' target="_blank">
      <Container>
        <Image src={wppIcon} width={50} height={50}/>
      </Container>
    </Link>
  )
}

export default WhatsAppIcon;