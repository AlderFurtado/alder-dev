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
