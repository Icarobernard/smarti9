import styled from "styled-components";
import { colors, fonts } from "~/src/styles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  float: top;
  z-index: 99999;
  display: flex;
  align-items: flex-end;
`;

export const ModalContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  border-radius: 12px;
  background-color: ${colors.verde};
  margin: 4rem auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  font-family: ${fonts.fontFamily.poppins};
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const ButtonAccept = styled.button`
  background-color: ${colors.roxoEscuro};
  color: #fff;
  border: none;
  padding: 15px 35px;
  font-size: 20px;
  font-family: ${fonts.fontFamily.poppins};
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonDecline = styled.button`
  border: solid 2px ${colors.roxoEscuro};
  background-color: transparent;
  color: ${colors.roxoEscuro};
  padding: 15px 35px;
  font-size: 20px;
  font-family: ${fonts.fontFamily.poppins};
  border-radius: 4px;
  margin-right: 15px;
  cursor: pointer;
`;
