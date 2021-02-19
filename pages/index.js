import Head from "next/head";
import Hero from "../src/components/Hero/Hero";
import About from "../src/components/About/About";
import Menu from "../src/layout/Menu/Menu";
export default function Home() {
  return (
    <div>
      <Menu />
      <Head>
        <title>Alder Furtado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </div>
  );
}
