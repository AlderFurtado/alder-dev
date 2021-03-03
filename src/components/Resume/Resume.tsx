import React from "react";

import ResumeItem from "./ResumeItem/ResumeItem";

import styles from "./Resume.module.css";

interface Step {
  id: string;
  name: string;
  activity: string;
  period: string;
}
const Resume = (): JSX.Element => {
  const resume: Array<Step> = [
    {
      id: "1",
      name: "CESUPA",
      activity:
        "Centro universitario de Estado do Pará, formação em bacharelado em Ciência da Computação",
      period: "01/2016 - 12/2019",
    },
    {
      id: "2",
      name: "PRODEPA",
      activity:
        "Empresa de Tecnologia da Informação e Comunicação do Estado do Pará, estágio em desenvolvimento Android",
      period: "04/2018 - 09/2018",
    },
    {
      id: "3",
      name: "SERPRO",
      activity:
        "Serviço Federal de Processamento de Dados, estágio em desenvolvimento web",
      period: "10/2018 - 02/2020",
    },
    {
      id: "4",
      name: "NIEJ",
      activity:
        "Núcleo de Inovação e Empreendedorismo Junior, gestor em tecnologia",
      period: "03/2018 - 08/2018",
    },
    {
      id: "5",
      name: "BANPARÁ",
      activity: "Banco do Estado do Pará, analista de sistema de crédito",
      period: "02/2018 - 04/2020",
    },
    {
      id: "6",
      name: "TIVA",
      activity:
        "O app de gestão de cobrança para profissionais liberais,autônomos e ONGs, desenvolvedor backend",
      period: "05/2020 - dias atuais",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2>Histórico</h2>
      <div className={styles.container}>
        {resume.map((r, index) => {
          return (
            <ResumeItem
              key={r.id}
              id={r.id}
              name={r.name}
              activity={r.activity}
              period={r.period}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Resume;
