import axios from "axios";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import BtnDefault from "../BtnDefault/BtnDefault";
import { Container, ContainerInput, Alert } from "./FormContact.styles";

const FormContact = (): JSX.Element => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [subject, setSubject] = useState("");
  const [isSubjectValid, setIsSubjectValid] = useState(true);

  const [isSendingForm, setIsSendingForm] = useState(false);

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const CORS_PROXY = "https://cors-escape.herokuapp.com/";
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/1/d/e/1FAIpQLScNV_Gn_0BR3pfqnrpM_HqtsWXW0CF2pkL1K9ycW5YiZDUTZg/formResponse";

  const handleForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSendingForm(true);
    const formData = new FormData();
    formData.append("entry.1651922784", name);
    formData.append("entry.1804104486", email);
    formData.append("entry.1866142014", subject);

    try {
      const result = await axios.post(GOOGLE_FORM_ACTION_URL, formData);
    } catch (error) {
      console.log(error);
      setIsAlertVisible(true);
    } finally {
      setIsAlertVisible(true);
    }
    setIsSendingForm(false);
    resetForm();
  };

  const validateForm = () => {
    let isValid = true;
    if (email.trim().length == 0) {
      setIsEmailValid(false);
      isValid = false;
    } else {
      setIsEmailValid(true);
    }

    if (name.trim().length == 0) {
      setIsNameValid(false);
      isValid = false;
    } else {
      setIsNameValid(true);
    }

    if (subject.trim().length == 0) {
      setIsSubjectValid(false);
      isValid = false;
    } else {
      setIsSubjectValid(true);
    }

    return isValid;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
  };

  return (
    <>
      <Container onSubmit={(e) => handleForm(e)}>
        <ContainerInput>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!isNameValid && <span>Preencha o campo</span>}
        </ContainerInput>
        <ContainerInput>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && <span>Preencha o campo</span>}
        </ContainerInput>
        <ContainerInput>
          <textarea
            placeholder="Assunto"
            rows={15}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {!isSubjectValid && <span>Preencha o campo</span>}
        </ContainerInput>
        <BtnDefault title="Enviar" isLoading={isSendingForm} />
      </Container>

      {isAlertVisible && (
        <Alert>
          <h4 style={{ color: "green" }}>Messagem enviada com sucesso</h4>{" "}
          <span onClick={() => setIsAlertVisible(false)}>X</span>
        </Alert>
      )}
    </>
  );
};

export default FormContact;
