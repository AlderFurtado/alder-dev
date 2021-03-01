import Head from "next/head";

import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Resume from "../src/components/Resume/Resume";

import Menu from "../src/layout/Menu/Menu";
import Contact from "../src/components/Contact/Contact";
import Product from "../src/components/Project/Project";
import Footer from "../src/layout/Footer/Footer";

export default function Home(): JSX.Element {
  return (
    <div>
      <Menu />
      <Head>
        <title>Alder Furtado</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Site profissional de desenvolvedor Full Stack - Alder Furtado"
        />
        <meta
          name="keywords"
          content="Alder, JavaScript, Dev, Desenvolvedor, Programação"
        ></meta>
        <meta name="author" content="Alder Furtado"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content="Alder Dev" />
        <meta
          property="og:description"
          content="Site profissional de desenvolvedor Full Stack - Alder Furtado"
        />
        <meta property="og:image" content="./me.png" />
        <meta property="og:url" content="https://alder-dev.vercel.app" />
      </Head>
      <Hero />
      <About />
      <Resume />
      {/* <Product /> */}
      <Contact />
      <Footer />
    </div>
  );
}
