import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Wrapper, ContainerImage, Title, Subtitle } from "./About.styles";

const About = (): JSX.Element => {
  const sec = useRef(null) as React.MutableRefObject<HTMLElement>;
  const [activeAnimation, setActiveAnimaion] = useState(false);

  useEffect((): void => {
    window.addEventListener("scroll", () => {
      if (sec.current?.getBoundingClientRect().top > 200) {
        console.log(sec.current?.getBoundingClientRect().top);
      } else {
        setActiveAnimaion(true);
      }
    });
  }, []);

  return (
    <Wrapper ref={sec}>
      <ContainerImage activeAnimation={activeAnimation}>
        <Image src="/me.png" width="267" height="300" />
      </ContainerImage>
      <div>
        <Title activeAnimation={activeAnimation}>Sobre</Title>
        <Subtitle activeAnimation={activeAnimation}>
          Sou bacharel em Ciência da Computação pelo CESUPA - Centro
          Universitário do Pará. Apaixonado por tecnologia, acredito que a mesma
          possa ser a extensão da capacidade humana. Também me arrisco no mundo
          da finanças e super curioso pelo estudo da psicologia. Espero que
          possa encontrar o que deseja nesse site 😃
        </Subtitle>
      </div>
    </Wrapper>
  );
};

export default About;
