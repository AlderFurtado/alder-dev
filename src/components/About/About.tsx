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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores
          adipisci dolorum voluptatibus expedita eveniet qui dicta, aspernatur
          sapiente eum at eligendi reprehenderit recusandae odit ullam ducimus
          cupiditate minima tempore? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolorum adipisci dolor, minus nam minima eligendi.
          Blanditiis quod tempora, inventore accusantium perspiciatis placeat.
          Velit molestiae ullam consequuntur dignissimos nemo quidem eius!
        </p>
      </div>
    </section>
  );
};

export default About;
