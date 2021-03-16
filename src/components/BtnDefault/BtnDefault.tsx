import React from "react";
import { ContainerBtnDefault } from "./BtnDefault.styles";

// import { Container } from './styles';

interface BtnDefaultProps {
  title: string;
  isLoading: boolean;
}

const BtnDefault = ({ title, isLoading }: BtnDefaultProps): JSX.Element => {
  return (
    <ContainerBtnDefault>
      {isLoading ? "Carregando" : title}
    </ContainerBtnDefault>
  );
};

export default BtnDefault;
