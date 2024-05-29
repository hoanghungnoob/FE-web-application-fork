import React from "react";
import "../assets/css/clients/contact.css";
import ContactUsForm from "../components/form/ContactUsForm";
const Contact = () => {
  return (
    <div className="block w-full position-relative"> 
      <div className="container my-10" id="container-fluid">
        <div className="contact" id="bg-1">
          <h1 className="text-center text-6xl">Contact Us</h1>
          <p className="text-center">
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
          </p>
        </div>
      </div>
      <div className="my-10">
      <ContactUsForm />
      </div>
      <div className="contact-information flex my-24 mt-3.5" id="contact-us">
        <div className="call-us">
          <label className="form-label custom-label css-label">Call Us:</label>
          <p className="text-red-700">+1-234-567-8900</p>
        </div>
        <div className="hour">
          <label className="form-label custom-label css-label">Hours:</label>
          <p className="hour-location">Mon-Fri: 11am - 8pm</p>
          <p className="hour-location">Sat, Sun: 9am - 10pm</p>
        </div>
        <div className="location">
          <label className="form-label custom-label css-label">
            Our Location:
          </label>
          <p className="hour-location">123 Bridge Street</p>
          <p className="hour-location">Nowhere Land, LA</p>
          <p className="hour-location">USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
