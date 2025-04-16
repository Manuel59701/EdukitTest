import React from "react";
import "./OurTeam.css";
import Fuasat from "./Team_img.png";
import Bolaji from "./Bolaji.png";
import Tawa from "./Tawa.png";
import Damola from "./Deborah.png";
import Nasroh from "./Nasroh.png";
import Sandra from "./sandra.png";
import Naima from "./Naima.png";
import Saidat from "./Saidat.png";
import FausatAbiola from "./Fausat-Abiola.png";
import Ayooluwa from "./Ayooluwa.png";
import Enai from "./Enai.png";
import Jordan from "./Jordan.png";
import Vivian from "./Vivian.png";
import Omolade from "./Omolade.png";
import Jemimah from "./Jemimah.png";
import Samuel from "./Samuel.png";
import Rhema from "./Rhema.png";
import Malem from "./Malem.png";
import Mofinyin from "./Mofiyin.png";
import Marcus from "./Marcus.png";
import winifred from "./Winifred.png";
import Gideon from "./Gideon.png";
import Adachukwu from "./Adachukwu.png";
import John from "./john.png";
import Jane from "./Jane.png";
// Import Font Awesome icons
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const trustees = [
  {
    role: "Board of Trustees",
    Discriptions:
      "We’re fortunate to have a visionary Board of Trustees guiding our mission to create lasting impact in education.",
    members: [
      {
        name: "Fausat Abiola",
        role: "Chairman, Board of Trustees and Director of Operation",
        image: Fuasat,
        linkedin: "https://linkedin.com/in/rasaat-abiola",
        email: "rasaat.abiola@example.com",
      },
      {
        name: "Bolaji Oladeji",
        role: "Member, Board of Trustees and Director of IT",
        image: Bolaji,
        linkedin: "https://linkedin.com/in/shadi-okediji",
        email: "shadi.okediji@example.com",
      },
      {
        name: "Tawa Ajibade",
        role: "Secretary, Board of Trustees",
        image: Tawa,
        linkedin: "https://linkedin.com/in/tawa-ajibade",
        email: "tawa.ajibade@example.com",
      },
    ],
  },
  {
    role: "Honorary Trustees",
    Discriptions:
      "We’re lucky to have the support of amazing individuals helping us bridge Nigeria’s educational gap.",
    members: [
      {
        name: "Oyindamola Oyewole",
        role: "Cybersecurity & SaaS Content Writer, SEO Analyst",
        image: Damola,
        linkedin: "https://linkedin.com/in/oyindamola-oyewole",
        email: "oyindamolAbdulkareem",
      },
      {
        name: "Nasroh Raheem",
        role: "Cybersecurity Analyst ",
        image: Nasroh,
        linkedin: "https://linkedin.com/in/nasirah-abdulkareem",
        email: "nasirah.abdulkareem@example.com",
      },
      {
        name: "Sandra Odi",
        role: "Chairman, Board of Trustees and Director of Operation",
        image: Sandra,
        linkedin: "https://linkedin.com/in/sadeeqah-oket",
        email: "sadeeqah.oket@example.com",
      },
      {
        name: "Naima Mana",
        role: "Chairman, Board of Trustees and Director of Operation",
        image: Naima,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
    ],
  },
  {
    role: "Executive Team",
    Discriptions:
      "Led by passion and purpose, our Executive Team drives the strategies that make our mission a reality.",
    members: new Array(9).fill({
      name: "Saidat Shittu",
      role: "Campaign Manager",
      image: Saidat,
      linkedin: "https://linkedin.com/in/suliat-sikiru",
      email: "suliat.sikiru@example.com",
    }),
  },
  {
    role: "INNOVATION TEAM",
    Discriptions:
      "We’re lucky to have a visionary Innovation Team turning ideas into impactful solutions, shaping the future of education with creativity and dedication.",
    members: [
      {
        name: "Fausat Abiola",
        role: "Lead, Product Manager",
        image: FausatAbiola,
        linkedin: "https://linkedin.com/in/oyindamola-oyewole",
        email: "oyindamolAbdulkareem",
      },
      {
        name: "Ayooluwa Adebowale",
        role: "Product Manager",
        image: Ayooluwa,
        linkedin: "https://linkedin.com/in/nasirah-abdulkareem",
        email: "nasirah.abdulkareem@example.com",
      },
      {
        name: "Enai Owuna",
        role: "Product Manager",
        image: Enai,
        linkedin: "https://linkedin.com/in/sadeeqah-oket",
        email: "sadeeqah.oket@example.com",
      },
      {
        name: "Jordan Abeti",
        role: "Product Manager",
        image: Jordan,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Funpere Vivian Egbekai",
        role: "Lead, Product Designer",
        image: Vivian,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Omolade Azeez",
        role: "UI/UX Designerr",
        image: Omolade,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Atenaga Jemimah",
        role: "UI/UX Designer",
        image: Jemimah,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Samuel Nwankwoala",
        role: "UI/UX Designer",
        image: Samuel,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Rhema Akpan",
        role: "UI/UX Designer",
        image: Rhema,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Akudung Malem Obed",
        role: "UI/UX Designer",
        image: Malem,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Mofiyin Odusola",
        role: "UX Researcher/Copywriter",
        image: Mofinyin,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Marcus Emmanuel",
        role: "Lead, Front-End Developer",
        image: Marcus,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Winifred Eze",
        role: "Front-End Developer",
        image: winifred,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Agu Gideon",
        role: "Front-End Developer",
        image: Gideon,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Adachukwu Okafor",
        role: "Front-End Developer",
        image: Adachukwu,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "John Doey",
        role: "Back-End Developer",
        image: John,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
      {
        name: "Jane Dyer",
        role: "Back-End Developer",
        image: Jane,
        linkedin: "https://linkedin.com/in/melissa-mars",
        email: "melissa.mars@example.com",
      },
    ],
  },
];
const TeamSection = () => {
  return (
    <div className="team-section">
      {trustees.map((group, index) => (
        <div key={index} className="team-group">
          <div className="team-header-discription">
            <h2>{group.role.toUpperCase()}</h2>
            <p>{group.Discriptions}</p>
          </div>
          <div
            className={`team-grid ${
              group.role === "Board of Trustees" ? "board-grid" : "default-grid"
            }`}
          >
            {group.members.map((member, idx) => (
              <div
                key={idx}
                className={`team-card ${
                  group.role === "Board of Trustees" ? "popup-card" : ""
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`${
                    group.role === "Board of Trustees"
                      ? "board-image"
                      : "default-image"
                  }`}
                />
                {group.role === "Board of Trustees" ? (
                  <div className="popup-info">
                    <div className="popup-info-text">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                    <div className="icon-links">
                      <div className="link-mail">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className=" icon-edits" />
                        </a>
                        <a href={`mailto:${member.email}`} aria-label="Mail">
                          <FaEnvelope className="icon-edits" />
                        </a>
                      </div>
                      <div className="more-info-icon">
                        <a
                          href="https://example.com/more-info"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="More Info"
                        >
                          <FiExternalLink className="icon-edits" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="info-member">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="icon-links">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="icon-edits icon-edits2" />
                      </a>
                      <a href={`mailto:${member.email}`} aria-label="Mail">
                        <FaEnvelope className="icon-edits icon-edits2" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
