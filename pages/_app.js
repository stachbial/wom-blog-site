import "../styles/globals.css";

import Layout from "../components/layout/Layout";
import NavigationBar from "../components/layout/NavigationBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
