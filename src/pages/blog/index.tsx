import React, { useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import Menu from "../../layout/Menu/Menu";
import { GetStaticProps } from "next";
import { getPosts } from "../../services/prismic";
import ResponsePrismic from "../../types/ResponsePrismic";
import Footer from "../../layout/Footer/Footer";
import HeadSeo from "../../seo/HeadSeo";
import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #011230;
`;
interface BlogProps {
  postsResponse: ResponsePrismic;
}

const blog = ({ postsResponse }: BlogProps): JSX.Element => {
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
      <Blog postsResponse={postsResponse} />
      <Footer />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPosts();
  const postsResponse = { ...response };
  console.log(postsResponse);
  return {
    props: {
      postsResponse,
    },
  };
};

export default blog;
