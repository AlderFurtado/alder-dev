import "../../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
