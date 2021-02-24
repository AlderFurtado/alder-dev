import Head from "next/head";

import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Resume from "../src/components/Resume/Resume";

import Menu from "../src/layout/Menu/Menu";
import Contact from "../src/components/Contact/Contact";

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
      <Contact />
    </div>
  );
}
