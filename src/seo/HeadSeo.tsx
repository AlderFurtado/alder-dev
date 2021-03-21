import Head from "next/head";
import React from "react";

// import { Container } from './styles';
interface HeadSeoProps {
  title: string;
  description: string;
  keywords: string;
  author: string;
  image: string;
  url: string;
}

const HeadSeo = ({
  title,
  description,
  keywords,
  author,
  image,
  url,
}: HeadSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}></meta>
      <meta name="author" content={author}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Head>
  );
};

export default HeadSeo;
