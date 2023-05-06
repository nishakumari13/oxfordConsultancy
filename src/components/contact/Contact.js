import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";

const Contact = () => {
  const phoneNum = "+91 94311 31121";
  const msg = "hey there! I want to have a chat.";

  const handleWhatsappChatClick = () => {
    const encodedText = encodeURIComponent(msg);
    const url = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodedText}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      {/* <Navbar />
      <HeroImg3 /> */}
      <section id="contact">
        <div className="contact">
          <h5>Get In Touch</h5>
          <h2>Contact</h2>
        </div>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <HiOutlineMail className="contact_icon" />
              <h4 className="text">Whatsapp</h4>
              <h5 className="text">+91 94311 31121</h5>
              <a
                onClick={handleWhatsappChatClick}
                target="_blank"
                className="link"
              >
                Send a message
              </a>
            </article>
          </div>

          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="Enter your Contact"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Write your message"
              required
            ></textarea>

            {/* <button type="submit" className="btn btn-primary"> */}
            <a
              href="mailto:oxfordconsultancy001@gmail.com"
              target="_blank"
              className="btn "
            >
              Send Message
            </a>
            {/* </button> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
