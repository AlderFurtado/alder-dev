import React, { useEffect } from "react";
import styles from "./Hero.module.css";

import Image from "next/image";

const Hero = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container_hero}>
        <h1>
          Olá, Eu sou <span>Alder Furtado</span>
          <br></br> Sou Fullstack developer{" "}
        </h1>
        <p>
          Todo négocio precisa de tecnologia,<br></br> e o meu négocio é
          tecnologia.
        </p>
      </div>
      <div className={styles.container_img}>
        <img src="./hero.png" alt="Alder Furtado" />
      </div>
    </section>
  );
};

export default Hero;
