import React, { useEffect, useRef, useState } from "react";

import { Container, ContainerPeriod } from "./ResumeItem.styles";
import Image from "next/image";

interface StepProps {
  id: string;
  name: string;
  activity: string;
  period: string;
  index: number;
}

const ResumeItem = ({ name, activity, period, index }: StepProps) => {
  const sec = useRef(null);
  const [activeAnimation, setActiveAnimaion] = useState(false);
  const factorDelay = 3;

  useEffect((): void => {
    window.addEventListener("scroll", () => {
      if (sec.current?.getBoundingClientRect().top > 600) {
      } else {
        setActiveAnimaion(true);
      }
    });
  }, []);

  return (
    <Container
      ref={sec}
      activeAnimation={activeAnimation}
      delay={index * factorDelay * 100}
    >
      <h3>{name}</h3>
      <p>{activity}</p>
      <ContainerPeriod>
        <Image src="/clock.svg" width="16" height="16" />
        &nbsp; &nbsp;
        <span>{period}</span>
      </ContainerPeriod>
    </Container>
  );
};

export default ResumeItem;
