import React from "react";
import "./Contact.scss";
import PageTitle from "@common/PageTitle/PageTitle";
import ContactForm from "./ContactForm";
import { GoDeviceMobile, GoMail } from "react-icons/go";
import { FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <PageTitle
        title="Contact Us"
        subtitle="Thinking about starting a new project? We’d love to hear your ideas."
        bgColor="#18212f"
        textColor="#fff"
      />
      <section className="contact my-8">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section__title">Let's Talk</h2>
              <p className="contact__text">
                Drop us a message if you have any queries and we will get back
                to you as soon as possible.
              </p>

              <div className="contact__link">
                <a href="tel:07894248260">
                  <GoDeviceMobile />
                  <span>07894 248 260</span>
                </a>
              </div>

              <div className="contact__link">
                <a href="tel:07557261519">
                  <GoDeviceMobile />
                  <span>07557 261 519</span>
                </a>
              </div>

              <div className="contact__link">
                <a href="mailto:info@ascent.agency">
                  <GoMail />
                  <span>info@ascent.agency</span>
                </a>
              </div>

              <h6 className="follow mt-5 mb-3">FOLLOW US</h6>
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="follow__link"
              >
                <FiInstagram />
              </a>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
