import React from "react";
import styles from "./About.module.css";

import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container_image}>
        <Image src="/me.png" width="267" height="300" />
      </div>
      <div>
        <h2>Sobre</h2>
        <p>
          Sou bacharel em Ciência da Computação pelo CESUPA - Centro
          Universitário do Pará. Apaixonado por tecnologia, acredito que a mesma
          possa ser a extensão da capacidade humana. Também me arrisco no mundo
          da finanças e super curioso pelo estudo da psicologia. Espero que
          possa encontrar o que deseja nesse site 😃
        </p>
      </div>
    </section>
  );
};

export default About;
