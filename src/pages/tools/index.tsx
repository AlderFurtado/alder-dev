import React from "react";

import Footer from "../../layout/Footer/Footer";
import HeadSeo from "../../seo/HeadSeo";
import Menu from "../../layout/Menu/Menu";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #011230;
`;

import Link from "next/link";

const tools: React.FC = () => {
  return (
    <Wrapper>
      <HeadSeo
        title={"Alder Furtado"}
        description={
          "Site profissional de desenvolvedor Full Stack - Alder Furtado"
        }
        keywords={"Alder, JavaScript, Dev, Desenvolvedor, Programação"}
        author={"Alder Furtado"}
        image={"https://i.ibb.co/YBLKFSf/IMG-20200807-191408-106-1.png"}
        url={"https://alder-dev.vercel.app"}
      />
      <Menu />
      <div>
        <h1>Algumas ferramentas para desenvolvedores</h1>
        <Link href="tools/snippet_hooks">Snipptes Hooks</Link>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default tools;
