import "../styles/globals.css";

function NoSsrApp({ Component, pageProps }) {
  if (typeof window === "undefined") return null
  return <Component {...pageProps} />;
}

export default NoSsrApp;
