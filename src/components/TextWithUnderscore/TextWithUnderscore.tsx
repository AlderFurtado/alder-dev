import React from "react";
import { Text } from "./TextWithUnderscore.styles";

// import { Container } from './styles';

interface TextWithUnderscoreProps {
  textNormal: string;
  textUnderscore: string;
}

const TextWithUnderscore = ({
  textNormal,
  textUnderscore,
}: TextWithUnderscoreProps): JSX.Element => {
  return (
    <Text>
      {textNormal}
      <span>{textUnderscore}</span>
    </Text>
  );
};

export default TextWithUnderscore;
