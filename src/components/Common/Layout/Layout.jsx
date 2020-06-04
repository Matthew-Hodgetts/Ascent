import React from "react";

import Nav from "@common/Nav/Nav";
import Footer from "@common/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
