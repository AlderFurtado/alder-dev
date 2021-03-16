import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import React, { Context, useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import Footer from "../../layout/Footer/Footer";
import Menu from "../../layout/Menu/Menu";
import HeadSeo from "../../seo/HeadSeo";
import { getPost, getPosts, setRichTextAsText } from "../../services/prismic";
import { ResultResponsePrismic } from "../../types/ResponsePrismic";

interface Iblog {
  post: ResultResponsePrismic;
  newPosts: ResultResponsePrismic[];
}

const blog = ({ post, newPosts }: Iblog): JSX.Element => {
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
        title={setRichTextAsText(post.data.title)}
        description={setRichTextAsText(post.data.subtitle)}
        keywords={post.tags.toString()}
        image={post.data.main_image.url}
        author={post.data.author[0].text}
        url={shareUrl}
      />
      <Post post={post} newPostsProps={newPosts} />
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
  const responsePost = await getPost(context.params.id.toString());

  const responsePosts = await getPosts(3);
  return {
    props: {
      post: responsePost,
      newPosts: responsePosts.results,
    },
  };
};

export default blog;
