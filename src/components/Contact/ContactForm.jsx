import React, { useState } from "react";
import "./ContactForm.scss";
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const onFormChange = (e) => {
    const copy = { ...formState, [e.target.name]: e.target.value };
    setFormState(copy);
  };
  return (
    <form action="" className="contact__form">
      <div className="row mt-5 mt-md-0">
        <div className="col-md-6">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formState.subject}
            onChange={(e) =>
              setFormState({ ...formState, [e.target.name]: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, [e.target.name]: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <input type="submit" value="SEND MESSAGE" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
