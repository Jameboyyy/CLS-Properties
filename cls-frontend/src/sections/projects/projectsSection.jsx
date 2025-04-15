import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./projectsSection.css";

const ProjectsSection = ({ city, description, image, align }) => {
  const navigate = useNavigate();
  const [hoverEnabled, setHoverEnabled] = useState(false);

  const handleExplore = () => {
    navigate(`/properties/${city.toLowerCase()}`);
  };

  const motionVariants = {
    leftToRight: {
      hidden: { opacity: 0, x: -200 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.3, duration: 1.5 },
      },
    },
    rightToLeft: {
      hidden: { opacity: 0, x: 200 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.3, duration: 1.5 },
      },
    },
  };

  const variant = align === "left" ? "leftToRight" : "rightToLeft";

  return (
    <section id="projects--container">
      <div
        className={`city--container ${hoverEnabled ? "hover-active" : ""}`}
        style={{
          pointerEvents: hoverEnabled ? "auto" : "none",
        }}
      >
        <img src={image} alt={`${city} view`} className="city--image" />

        <motion.div
          className="city--content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }} // Adjust threshold if needed
          variants={motionVariants[variant]}
          onAnimationComplete={() => setHoverEnabled(true)}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
