import React from "react";
import Blog from "../components/Blog/Blog";
import Menu from "../layout/Menu/Menu";

// import { Container } from './styles';

const blog: React.FC = () => {
  return (
    <>
      <Menu />
      <Blog />
    </>
  );
};

export default blog;
