import React from "react";
import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";
import About from "@components/Home/About";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
  </Layout>
);

export default IndexPage;
