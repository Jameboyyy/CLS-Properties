import React, { useState, useEffect } from "react";
import "./landscapeH.css";
import { fetchLandscapeHome } from "../../services/api/landscapeHomeApi";
import { motion } from "framer-motion";

const LandscapeH = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function loadHeroData() {
      const data = await fetchLandscapeHome();
      setHeroData(data);
    }
    loadHeroData();
  }, []);

  // Skeleton loader if data isn't available ye
  return (
    <section id="landscapeH__container">
      <div className="landscapeH__wrapper">
        <motion.div
          className="landscapeH__sect"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="landscapeH__heading">{heroData?.heading}</h1>
          <h2 className="landscapeH__subheading">{heroData?.subheading}</h2>
          <motion.button
            className="landscapeH__cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div>

        <motion.div
          className="landscapeH__sect landscapeH__right"
          initial={{ opacity: 0, x: 40}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8 }}
          style={{ backgroundImage: `url(${heroData?.image_url})` }}
        >
          <img
            src={heroData?.image_url}
            alt="Hero"
            className="landscapeH__img"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LandscapeH;
