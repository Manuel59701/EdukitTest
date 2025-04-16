import React from "react";
import "./ContactUs.css";
import ContactImage from "../../assets/contact-image.png";

// Icon assets
import LocationIcon from "../../assets/location.png";
import PhoneIcon from "../../assets/phone.png";
import EmailIcon from "../../assets/email.png";
import ClockIcon from "../../assets/clock.png";
import GetInvolvedImage from "../../assets/get-involved-image.png"; // Add your image here

const ContactUs = () => {
  return (
    <div className="cu-wrapper">
      <div className="cu-header">CONTACT US</div>

      <section className="cu-hero">
        <div className="cu-hero-left">
          <img src={ContactImage} alt="Contact visual" />
        </div>

        <div className="cu-hero-right">
          <div className="cu-form-wrapper">
            <h2>GOT QUESTIONS OR FEEDBACK?</h2>
            <span>LET'S TALK!</span>
            <p>We’d love to hear from you. Please fill out this form.</p>
            <form className="cu-form">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name" />
              <label>Email</label>
              <input type="email" placeholder="Email Address" />
              <label>Phone number</label>
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Message" />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="cu-contact-cards">
        <div className="cu-contact-cards-text">
          <div className="cu-contact-heading">
            <h2>
              OTHER WAYS YOU CAN <span className="cu-highlight">REACH US</span>
            </h2>
          </div>
          <div className="cu-card-container">
            <div className="cu-card">
              <div className="cu-icon">
                <img src={LocationIcon} alt="Address Icon" />
              </div>
              <h3>Address</h3>
              <p>8, Church Street Poly Road, Sango, Ibadan, Nigeria</p>
            </div>
            <div className="cu-card">
              <div className="cu-icon">
                <img src={PhoneIcon} alt="Phone Icon" />
              </div>
              <h3>Phone</h3>
              <p>+234-810-569-4331</p>
            </div>
            <div className="cu-card">
              <div className="cu-icon">
                <img src={EmailIcon} alt="Email Icon" />
              </div>
              <h3>Email</h3>
              <p>edukitnigeria@gmail.com info@edukitnigeria.org</p>
            </div>
            <div className="cu-card">
              <div className="cu-icon">
                <img src={ClockIcon} alt="Clock Icon" />
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday</p>
              <span>9:00AM - 5:00PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="cu-join-card">
        <div className="cu-join-text">
          <p className="cu-join-heading">
            Join us to bridge the educational gap and brighten futures.
          </p>
          <button className="cu-get-involved-btn">
            <span className="cu-circle-group">
              <span className="cu-outer-circle"></span>
              <span className="cu-inner-circle"></span>
            </span>
            Get Involved
          </button>
        </div>

        <div className="cu-join-image">
          <img src={GetInvolvedImage} alt="Join Us" />
        </div>
      </section>

      {/* FAQ Section */}
      <div className="cu-faq-container">
        <section className="cu-faq-section">
          <h2 className="cu-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="cu-faq-subtitle">
            Find answers to frequently asked questions about EduKit Foundation,
            our mission, donation process, impact, and more. If you can't find
            what you're looking for, feel free to contact us for further
            assistance.
          </p>

          <div className="cu-faq-accordion">
            <details open>
              <summary>What is Edukit Foundation?</summary>
              <p>
                Educational Kits for Charity Foundation (Edukit) is a platform
                dedicated to bridging the educational gap by providing
                resources, tools, and opportunities to underserved schools and
                students across Nigeria.
              </p>
            </details>

            <details>
              <summary>Who can benefit from Edukit Foundation?</summary>
              <p>
                Students, schools, and underserved communities across Nigeria.
              </p>
            </details>

            <details>
              <summary>
                What kind of resources does Edukit Foundation provide?
              </summary>
              <p>
                We provide books, educational kits, learning materials,
                mentorship programs, and more.
              </p>
            </details>

            <details>
              <summary>How can I get involved with Edukit Foundation?</summary>
              <p>
                You can get involved by donating, volunteering, or partnering
                with us.
              </p>
            </details>

            <details>
              <summary>How can I donate books or resources?</summary>
              <p>
                You can reach out through our contact page or send us an email
                to coordinate your donation.
              </p>
            </details>

            <details>
              <summary>Are financial donations secure?</summary>
              <p>
                Yes, we use trusted payment gateways to ensure your financial
                donations are safe and secure.
              </p>
            </details>

            <details>
              <summary>Can I donate from outside Nigeria?</summary>
              <p>
                Absolutely! We accept donations from supporters around the
                world.
              </p>
            </details>

            <details>
              <summary>
                Will I receive a receipt or confirmation for my donation?
              </summary>
              <p>
                Yes, a receipt will be sent to your email upon confirmation of
                your donation.
              </p>
            </details>

            <details>
              <summary>How can I partner with Edukit Foundation?</summary>
              <p>
                Contact us via our website or email to start a partnership
                conversation.
              </p>
            </details>

            <details>
              <summary>
                What are the benefits of partnering with Edukit Foundation?
              </summary>
              <p>
                You contribute to real impact, gain CSR opportunities, and
                become part of our mission to bridge the education gap.
              </p>
            </details>

            <details>
              <summary>
                How can my school or community request resources?
              </summary>
              <p>
                Submit a request via our website or get in touch with us
                directly through our contact page.
              </p>
            </details>

            <details>
              <summary>What is the process for receiving resources?</summary>
              <p>
                After submitting a request, our team will assess and reach out
                to coordinate delivery based on availability and need.
              </p>
            </details>

            <details>
              <summary>Can I volunteer with Edukit Foundation?</summary>
              <p>
                Yes! We welcome volunteers. You can sign up via our website or
                email us directly.
              </p>
            </details>

            <details>
              <summary>
                Do I need any special qualifications to volunteer?
              </summary>
              <p>
                No special qualifications are needed. Just a passion to help and
                commitment to the cause.
              </p>
            </details>

            <details>
              <summary>
                How can I give feedback about Edukit Foundation?
              </summary>
              <p>
                You can share feedback through our contact form, email, or
                social media channels.
              </p>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
