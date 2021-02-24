import React from "react";
import styles from "./FormContact.module.css";

const FormContact = (): JSX.Element => {
  const [];
  return (
    <form className={styles.container}>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Assunto" rows={15} />
      <button>Enviar</button>
    </form>
  );
};

export default FormContact;
