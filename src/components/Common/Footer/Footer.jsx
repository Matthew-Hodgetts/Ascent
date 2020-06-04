import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="site__footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-center text-sm-left py-1">
            <p className="copyright my-0">
              Copyright Ascent Agency {new Date().getFullYear()}. All Rights
              Reserved
            </p>
          </div>
          <div className="col-sm-4 text-center text-sm-right py-1">Socials</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
