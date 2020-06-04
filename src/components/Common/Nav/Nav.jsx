import React from "react";
import "./Nav.scss";
import { Link } from "gatsby";
import logo from "@images/common/logo.png";
import logo2x from "@images/common/logo2x.png";
const Nav = () => (
  <header className="site__nav">
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Link to="/">
            <img
              srcSet={`${logo},
                    ${logo2x} 1.5x`}
              src={`${logo}`}
              className="nav__logo"
              alt="Ascent Agency"
            />
          </Link>
        </div>
        <div className="col">
          <nav className="nav__menu">
            <ul>
              <li>
                <Link to="/" activeClassName="current">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" activeClassName="current">
                  Our work
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="current">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact-us" activeClassName="current">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-1">Button</div>
      </div>
    </div>
  </header>
);

export default Nav;
