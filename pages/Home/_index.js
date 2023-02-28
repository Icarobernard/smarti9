import React from "react";
import NavBar from "~/src/components/NavBar";
import WhatsAppIcon from "~/src/components/WhatsAppIcon";
import ModalAcceptCookies from "~/src/components/ModalAcceptCookies";
import Header from "../../src/sections/Header/index";

function Home() {
  return (
    <>
      <ModalAcceptCookies />
      <NavBar />
      <Header />
      <WhatsAppIcon />
    </>
  );
}

export default Home;
