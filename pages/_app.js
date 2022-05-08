import React from "react";

import Layout from "../components/layout/Layout";

import "../pageStyles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
