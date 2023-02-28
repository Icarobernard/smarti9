import Head from "next/head";
import icone from "~/src/assets/icones/smarti9_icon.png";
import Home from "./Home/_index";
import { GlobalStyle } from "~/src/styles";
import SecaoCooperacao from "../src/sections/SecaoCooperacao/index";
import SecaoNos from "../src/sections/SecaoNos/index";
import SecaoFintechs from "../src/sections/SecaoFintechs/index";
import SecaoProjetos from "../src/sections/SecaoProjetos/index";
import SecaoMetodologias from "../src/sections/SecaoMetodologias/index";
import SecaoTecnologias from "../src/sections/SecaoTecnologias/index";
import SecaoContato from "../src/sections/SecaoContato/index";
import SecaoBoaImpressao from "../src/sections/SecaoBoaImpressao/index";
import Footer from "../src/sections/Footer/index";
import ModalAcceptCookies from "../src/components/ModalAcceptCookies/index";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #2d003b;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Smarti9</title>
        <meta
          name="description"
          content="Empresa especializada em desenvolvimento de projetos para web, mobile, outsourcing e muito mais!"
        />
        <link rel="icon" href={icone} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
      <SecaoCooperacao />
      <SecaoNos />
      <SecaoFintechs />
      <SecaoBoaImpressao />
      <SecaoMetodologias />
      <SecaoProjetos />
      <SecaoTecnologias />
      {/* <SecaoContato /> */}
      <Footer />
    </Container>
  );
}
