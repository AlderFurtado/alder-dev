import React from "react";

import styles from "./Project.module.css";

const Project = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <h2>Projetos</h2>
      <div className={styles.container}>
        <div>
          <img
            className={styles.img_web}
            src="https://raw.githubusercontent.com/AlderFurtado/covid-19/master/src/assets/print.png"
          />
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/AlderFurtado/wallet_flutter/master/lib/images/s1.jpeg" />
        </div>
      </div>
    </section>
  );
};

export default Project;
