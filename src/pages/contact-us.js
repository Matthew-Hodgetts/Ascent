import React from "react";
import Layout from "@common/Layout/Layout";
import SEO from "@common/Seo/Seo";
import Contact from "@components/Contact/Contact";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Contact />
  </Layout>
);

export default ContactPage;
