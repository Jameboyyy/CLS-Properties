import React from "react";
import { useNavigate } from "react-router-dom"
import "./projectsSection.css";

const ProjectsSection = ({ city, description, image, align }) => {

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/properties/${city.toLowerCase()}`);
  };

  return (
    <section id={`projects--container`}>
      <div className="city--container">
        <img src={image} alt={`${city} view`} className="city--image" />
        <div className="city--content">
          <h2>{city.toUpperCase()}</h2>
          <p>{description.split("\n").map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
            ))}</p>
          <button className="explore--btn" onClick={handleExplore}>
            Explore our properties
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
