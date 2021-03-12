import React from "react";

import { Wrapper } from "./Tag.styles";
interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps): JSX.Element => {
  return <Wrapper>{tag}</Wrapper>;
};

export default Tag;
