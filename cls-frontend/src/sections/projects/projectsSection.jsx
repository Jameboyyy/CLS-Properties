import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 👈 added
import "./projectsSection.css";

const ProjectsSection = ({ city, description, image, align }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/properties/${city.toLowerCase()}`);
  };

  const motionVariants = {
    leftToRight: {
      hidden: { opacity: 0, x: -200 },
      visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    },
    rightToLeft: {
      hidden: { opacity: 0, x: 200 },
      visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
    },
  };

  const variant = align === "left" ? "leftToRight" : "rightToLeft";

  return (
    <motion.section
      id="projects--container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants[variant]} 
    >
      <div className="city--container">
        <img src={image} alt={`${city} view`} className="city--image" />
        <div className="city--content">
          <h2>{city.toUpperCase()}</h2>
          <p>
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <button className="explore--btn" onClick={handleExplore}>
            Explore our properties
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
