import '../styles/BlogCard.module.scss';
import "../styles/globals.scss";

import React from "react";
import Layout from "../components/layout.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
