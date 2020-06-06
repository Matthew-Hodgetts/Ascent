import React from "react";
import "./about.scss";
import aboutImg from "@images/home/about.jpg";
const About = () => {
  return (
    <section className="aboutHome py-7">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <img src={aboutImg} alt="Beautiful website on a mobile phone" />
          </div>
          <div className="col-lg-6 d-lg-flex align-items-center">
            <div className="aboutHome__box">
              <h5 className="section__subtitle color--accent1">ABOUT US</h5>
              <h2 className="section__title mb-4">
                Your success is what underpins ours
              </h2>
              <p>
                We’re a small team of creative minds based in Yorkshire with a
                decade of experience in graphic, web and logo design. We enjoy
                nothing more than delivering the best results we can to our
                clients, results that help them grow their business and increase
                their brand awareness. As your success is what underpins our
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
