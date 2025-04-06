import React, { useState } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Uniform Distribution and School Supplies Initiative",
      description:
        "Edukit Nigeria provided school uniforms, bags, and stationery to students at Hope Academy, Oyo State.",
      img: require("./project.1.png"),
    },
    {
      id: 2,
      title: "Community Fundraising Drive",
      description:
        "Edukit Nigeria hosted an engaging fundraising drive to generate support for it’s mission.",
      img: require("./project.2.png"),
    },
    {
      id: 3,
      title: "Community Library Setup",
      description:
        "Edukit Nigeria established a community library at Unity Secondary School in Sokoto State, Nigeria.",
      img: require("./project.3.png"),
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 7,
      title: "Project 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 8,
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 9,
      title: "Project 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
  ]);

  // const projectContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = 3;

  const handleScroll = (index) => {
    setActiveIndex(index);
  };

  const getDisplayedProjects = () => {
    const startIndex = activeIndex * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const displayedProjects = getDisplayedProjects();

  return (
    <section className="projects-main">
      <div className="projects-box">
        <h2>PROJECTS</h2>
        <h3>
          OUR PROJECTS, YOUR IMPACT: <br />
          MAKING A DIFFERENCE TOGETHER
        </h3>
        <p>
          Discover the impact of our initiatives in bridging the educational gap
          and shaping brighter futures. From providing <br />
          essential learning resources to using technology to enhance education,
          to creating equal opportunities for <br />
          underserved communities, see how we’re transforming lives and driving
          meaningful change.
        </p>
        <button className="project-buttons">See More Projects</button>
      </div>

      <div className="project-container">
        {displayedProjects.map((project) => (
          <div key={project.id} className="projects-cards">
            <img
              src={project.img}
              className="project-image"
              alt={project.title}
            />
            <div className="project-info">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-des">{project.description}</p>
              <a className="more" href="read more">
                Read More...
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="cards-controls">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`button-control ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => handleScroll(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
