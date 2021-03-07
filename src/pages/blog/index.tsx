import React, { useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import Menu from "../../layout/Menu/Menu";
import { GetStaticProps } from "next";
import { getPosts } from "../../services/prismic";
import ResponsePrismic from "../../types/ResponsePrismic";
import Footer from "../../layout/Footer/Footer";

interface BlogProps {
  postsResponse: ResponsePrismic;
}

const blog = ({ postsResponse }: BlogProps): JSX.Element => {
  return (
    <>
      <Menu />
      <Blog postsResponse={postsResponse} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPosts();
  const postsResponse = { ...response };
  return {
    props: {
      postsResponse,
    },
  };
};

export default blog;
