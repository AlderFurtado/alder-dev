import axios from "axios";
import React, { FormEvent, useState } from "react";
import styles from "./FormContact.module.css";

const FormContact = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [isSendingForm, setIsSendingForm] = useState(false);

  const CORS_PROXY = "https://cors-escape.herokuapp.com/";
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLScNV_Gn_0BR3pfqnrpM_HqtsWXW0CF2pkL1K9ycW5YiZDUTZg/formResponse";

  const handleForm = async (e: FormEvent) => {
    setIsSendingForm(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1651922784", name);
    formData.append("entry.1804104486", email);
    formData.append("entry.1866142014", subject);

    try {
      const result = await axios.post(GOOGLE_FORM_ACTION_URL, formData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendingForm(false);
      resetForm();
    }
  };

  const resetForm = () => {
    console.log("dako");
    setName("");
    setEmail("");
    setSubject("");
  };

  return (
    <form className={styles.container} onSubmit={(e) => handleForm(e)}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Assunto"
        rows={15}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <button type="submit">{isSendingForm ? "Enviando..." : "Enviar"}</button>
    </form>
  );
};

export default FormContact;
