import React, { useEffect } from "react";
import Blog from "../components/Blog/Blog";
import Menu from "../layout/Menu/Menu";
import { GetStaticProps } from "next";
import { getPosts } from "../services/prismic";
import ResultResponsePrismic from "../types/ResponsePrismic";

const blog = (props: ResultResponsePrismic): JSX.Element => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <Menu />
      <Blog />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  console.log("aqui", posts);
  return {
    props: {
      posts,
    },
  };
};

export default blog;
