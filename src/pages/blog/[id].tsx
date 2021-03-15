import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import React, { Context, useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";
import HeadSeo from "../../seo/HeadSeo";
import { getPost, getPosts, setRichTextAsText } from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";

// import { Container } from './styles';

const blog = (props: ResultResponsePrismic): JSX.Element => {
  const router = useRouter();
  let shareUrl = null;

  if (process.env.NODE_ENV == "production") {
    shareUrl = `https://alder-dev.vercel.app${router.asPath}`;
  } else {
    shareUrl = `https://localhost:3000${router.asPath}`;
  }
  return (
    <>
      <Menu />
      <HeadSeo
        title={setRichTextAsText(props.data.title)}
        description={setRichTextAsText(props.data.subtitle)}
        keywords={props.tags.toString()}
        image={props.data.main_image.url}
        author={props.data.author[0].text}
        url={shareUrl}
      />
      <Post {...props} />
      <Footer />
    </>
  );
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
    paths,
    fallback: false,
  };
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

export default blog;
