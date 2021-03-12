import React from "react";
import { ContainerBtnDefault } from "./BtnDefault.styles";

// import { Container } from './styles';

interface BtnDefaultProps {
  title: string;
}

const BtnDefault = ({ title }: BtnDefaultProps): JSX.Element => {
  return <ContainerBtnDefault>{title}</ContainerBtnDefault>;
};

export default BtnDefault;
