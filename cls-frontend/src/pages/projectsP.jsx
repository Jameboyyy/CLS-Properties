import React from 'react';
import './projectsP.css';
import ProjectsSection from '../sections/projects/projectsSection';

const cities = [
    {
      city: "Bohol",
      description: `Experience the perfect mix of serene beaches 
                    and rich culture in Bohol. With its growing 
                    infrastructure and booming tourism, Bohol
                    offers excellent opportunities for both 
                    relaxation and investment. Ideal for vacation 
                    homes or rental properties`,
      image: "/images/bohol.png",
    },
    {
      city: "Cebu",
      description: `Vibrant city life meets natural beauty in Cebu. 
                    As the Queen City of the South, Cebu boasts strong infrastructure, top schools, and healthcare, making it a smart choice for investment. 
                    Enjoy urban convenience with easy access to stunning beaches and resorts`,
      image: "/images/cebu.png",
    },
    {
      city: "Dumaguete",
      description: `Dumaguete offers a relaxed lifestyle with a thriving expat community. 
                    Known for its affordable living and proximity to universities and natural attractions, Dumaguete is great spot for peaceful living or investment in a growing area.`,
      image: "/images/dumaguete.png",
    },
    {
      city: "Valencia",
      description: `Jawa Valencia offers a prime opportunity for property investment with its strategic location, 
                    developing infrastructure, and diverse property options. As the area grows, you stand to benefit 
                    from rising property values and potential rental income. `,
      image: "/images/jawa.png",
    }
  ];

const Projects = () => {
    return (
        <div>
            {cities.map((cityData, index) => (
                <ProjectsSection 
                  key={index}
                  align={index % 2 === 0 ? "left" : "right"} {...cityData} />
            ))}
        </div>
    );
};

export default Projects;