import React, { useEffect } from "react";
import { useModal } from '~/src/components/ModalAcceptCookies/context/ModalContext';
import {
  ButtonAccept,
  ButtonDecline,
  Container,
  ContainerButtons,
  ModalContainer,
  Title,
} from "./style";

function ModalAcceptCookies() {
  const { isAcceptedCookie, acceptCookies, showModal } = useModal();

  const handleAcceptCookies = (value = true) => {
    acceptCookies(value)
    if (!value) window.history.back();
  }

  useEffect(() => {
    document.body.style.overflow = isAcceptedCookie ? 'visible' : 'hidden';
  }, [isAcceptedCookie]);


  return showModal || !isAcceptedCookie ? (
    <Container>
      <ModalContainer>
        <Title>Nós usamos cookies e outras tecnologias semelhantes para melhorar sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo do seu interesse. Ao acessar nosso site você concorda com tal monitoramento</Title>
        <ContainerButtons>
          <ButtonDecline onClick={() => handleAcceptCookies(false)}>
            Não aceitar
          </ButtonDecline>
          <ButtonAccept onClick={() => handleAcceptCookies()}>Aceitar</ButtonAccept>
        </ContainerButtons>
      </ModalContainer>
    </Container>
  ): null;
}

export default ModalAcceptCookies;
