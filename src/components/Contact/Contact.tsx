import React from "react";
import FormContact from "../FormContact/FormContact";
import styles from "./Contact.module.css";

import Image from "next/image";

const Contact = (): JSX.Element => {
  return (
    <section className={styles.wrapper}>
      <h2>Contato</h2>
      <div className={styles.container}>
        <div>
          <ul>
            <li>
              <Image src="/whatsapp.svg" width="24" height="24" /> &nbsp;
              aldermarcel12@gmail.com
            </li>
            <li>
              <Image src="/linkedin.svg" width="24" height="24" /> &nbsp; Alder
              Furtado
            </li>
          </ul>
        </div>
        <div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
