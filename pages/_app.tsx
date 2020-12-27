import "../styles/globals.css";
import App from "../src/App";

function NoSsrApp({ Component, pageProps: { children, ...pageProps } }) {
  if (typeof window === "undefined") return null;
  return <App><Component {...pageProps} /></App>;
}

export default NoSsrApp;
