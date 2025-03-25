import React, { useState, useEffect } from "react";
import "./landscapeH.css";
import { fetchLandscapeHome } from "../../services/api/landscapeHomeApi";

const LandscapeH = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function loadHeroData() {
      const data = await fetchLandscapeHome();
      setHeroData(data);
    }
    loadHeroData();
  }, []);

  return (
    <section id="landscapeH__container">
      <div className="landscapeH__wrapper">
        <div className="landscapeH__sect">
            <h1 className="landscapeH__heading">{heroData?.heading}</h1>
            <h2 className="landscapeH__subheading">{heroData?.subheading}</h2>
        </div>
        <div
          className="landscapeH__sect landscapeH__right"
          style={{ backgroundImage: `url(${heroData?.image_url})` }}
        >
          <img src={heroData?.image_url} alt="Hero" className="landscapeH__img" />
        </div>
      </div>
    </section>
  );
};

export default LandscapeH;