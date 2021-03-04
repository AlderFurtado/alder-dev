import React from "react";
import styles from "./Footer.module.css";

import styled from "styled-components";

export const Container = styled.footer`
  padding: 3em 12%;
  display: flex;
  flex-direction: row;
  color: #f8f8f8;
  justify-content: center;
  align-items: flex-end;
  background-color: #010d21;
`;

const Footer = (): JSX.Element => {
  return (
    <Container>
      <p>©Copyright - Alder Furtado</p>
    </Container>
  );
};

export default Footer;
