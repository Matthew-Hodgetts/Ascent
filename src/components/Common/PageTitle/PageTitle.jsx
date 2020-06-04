import React from "react";
import "./PageTitle.scss";
const PageTitle = ({
  title,
  subtitle,
  bgColor,
  textColor,
  titleColor,
  subtitleColor,
}) => {
  return (
    <header
      className="pageTitle"
      style={{ backgroundColor: `${bgColor}`, color: textColor }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h1 className="pageTitle__title" style={{ color: `${titleColor}` }}>
              {title}
            </h1>
            <h5
              className="pageTitle__subtitle"
              style={{ color: `${subtitleColor}` }}
            >
              {subtitle}
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
};

PageTitle.defaultProps = {
  title: "Lorem Ipsum Dolor",
  subtitle: "Sit amet adipiscing elit consectetur",
  bgColor: "#ccc",
  textColor: "#000",
  titleColor: "",
  subtitleColor: "",
};

export default PageTitle;
