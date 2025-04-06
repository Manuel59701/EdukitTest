import React from "react";
import "./partner.css"; // Import CSS file

const partner = () => {
  const sponsors = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ];

  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <div className="textHolder">
          <h4 className="sub-title">Key Collaborators</h4>
          <h2 className="title">Our Partners & Sponsors</h2>
        </div>
        <p className="description">
          With the generous support of our partners and sponsors,
          underprivileged students across Nigeria gain access to essential
          learning resources that support their academic growth.
        </p>
        <button className="button">Partner With Us</button>
      </div>

      {/* Sponsor Logos */}
      <div className="sponsors-grid">
        {sponsors.map((logo, index) => (
          <div key={index} className="sponsor-box">
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default partner;
