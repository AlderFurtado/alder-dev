import React from "react";
import styles from "./Hero.module.css";

import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div>
        <h1>
          Olá, Eu sou <span>Alder Furtado</span>
          <br></br> Sou Fullstack developer{" "}
        </h1>
        <p>
          Todo négocio precisa de tecnologia,<br></br> e o meu négocio é
          tecnologia
        </p>
      </div>
      <div>
        <Image src="/hero.png" width="450" height="250" />
      </div>
    </section>
  );
};

export default Hero;
