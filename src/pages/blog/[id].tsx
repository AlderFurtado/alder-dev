import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { Context, useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";
import { getPost, getPosts, setRichTextAsText } from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";

// import { Container } from './styles';

const blog = (props: ResultResponsePrismic): JSX.Element => {
  return (
    <>
      <Menu />
      <Post {...props} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const response = await getPost(context.params.id.toString());
  const postResponse = { ...response };
  return {
    props: {
      ...postResponse,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await getPosts();
  const ids = response.results.map((r) => r.id);
  const paths = ids.map((id) => {
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default blog;
