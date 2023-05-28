import React, { useEffect, useRef, useState } from "react";
import FormContact from "../FormContact/FormContact";

import Image from "next/image";
import { Wrapper, Container, ContainerForm } from "./Contact.styles";

const Contact = (): JSX.Element => {
  const sec = useRef(null);
  const [activeAnimation, setActiveAnimaion] = useState(false);

  useEffect((): void => {
    window.addEventListener("scroll", () => {
      if (sec.current?.getBoundingClientRect().top > 300) {
      } else {
        setActiveAnimaion(true);
      }
    });
  }, []);

  return (
    <Wrapper id="contact" activeAnimation={activeAnimation} ref={sec}>
      <h2>Contato</h2>
      <Container activeAnimation={activeAnimation}>
        <div>
          <ul>
            <a href="mailto:aldermarcel12@gmail.com" target="_blank">
              <li>
                <Image src="/mailwhite.svg" width="24" height="24" /> &nbsp;
                aldermarcel12@gmail.com
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/alder-furtado/"
              target="_blank"
            >
              <li>
                <Image src="/linkedin.svg" width="24" height="24" /> &nbsp;
                Alder Furtado
              </li>
            </a>
          </ul>
        </div>
        <ContainerForm activeAnimation={activeAnimation}>
          <FormContact />
        </ContainerForm>
      </Container>
    </Wrapper>
  );
};

export default Contact;
