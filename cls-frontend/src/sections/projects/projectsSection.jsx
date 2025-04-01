import React from "react";
import "./projectsSection.css";

const ProjectsSection = ({ city, description, image, align }) => {
  return (
    <section id={`projects--container`}>
      <div className="city--container">
        <img src={image} alt={`${city} view`} className="city--image" />
        <div className="city--content">
          <h2>{city}</h2>
          <p>{description.split("\n").map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
            ))}</p>
          <button className="explore--btn">Explore our properties</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
