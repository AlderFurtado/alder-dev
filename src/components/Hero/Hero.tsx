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
          Todo négociodadsa precisa de tecnologia,<br></br> e o meu négocio é
          tecnologia
        </p>
      </div>
      <div className={styles.container_img}>
        <img src="./hero.png" />
      </div>
    </section>
  );
};

export default Hero;
