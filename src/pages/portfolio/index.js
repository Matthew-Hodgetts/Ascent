import React from "react";
import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";
import PageTitle from "@common/PageTitle/PageTitle";
const PortfolioPage = () => {
  return (
    <Layout>
      <SEO title="Our work" />
      <PageTitle title="Our Portfolio" subtitle="See our works" color="red" />
      <section className="portfolio__page"></section>
    </Layout>
  );
};

export default PortfolioPage;
