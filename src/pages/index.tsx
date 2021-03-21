import Head from "next/head";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Resume from "../components/Resume/Resume";
import Menu from "../layout/Menu/Menu";
import Contact from "../components/Contact/Contact";
import Product from "../components/Project/Project";
import Footer from "../layout/Footer/Footer";
import HeadSeo from "../seo/HeadSeo";

import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #011230;
`;

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <Menu />
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
      <Hero />
      <About />
      <Resume />
      {/* <Product /> */}
      <Contact />
      <Footer />
    </Wrapper>
  );
}
