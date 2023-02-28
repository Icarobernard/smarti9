import React, { useEffect, useState } from "react";
import Image from "next/image";
import iconFacebook from "~/src/assets/icones/icone_facebook.png";
import iconInstagram from "~/src/assets/icones/icone_instagram.png";
import iconLinkedIn from "~/src/assets/icones/icone_linkedIn.png";
import iconWhatsapp from "~/src/assets/icones/icone_wpp.png";
import { DivFooter, Icons, Text, Link, SocialMediaLink } from "./styles";

function Footer() {
  const [currentYear, setCurrentYear] = useState(undefined);
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <DivFooter>
      <Icons>
        <SocialMediaLink
          href="https://api.whatsapp.com/send?phone=553284943333&text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
        >
          <Image src={iconWhatsapp} width={50} height={50} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.instagram.com/smart.i9/"
          target="_blank"
        >
          <Image src={iconInstagram} width={50} height={50} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.facebook.com/smarti9.si9"
          target="_blank"
        >
          <Image src={iconFacebook} width={50} height={50} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.linkedin.com/company/smarti9/"
          target="_blank"
        >
          <Image src={iconLinkedIn} width={50} height={50} />
        </SocialMediaLink>
      </Icons>
      <Text>
        © {currentYear} Smarti9 made with love. Template created by{" "}
        <Link href="https://biolinky.co/otimizesse" target="_blank">
          OtimiZesse
        </Link>
      </Text>
    </DivFooter>
  );
}

export default Footer;
