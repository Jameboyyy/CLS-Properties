import React from 'react';
import './projectsP.css';
import ProjectsSection from '../sections/projects/projectsSection';

const cities = [
    {
      city: "BOHOL",
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
        city: "Ormoc",
        description: `Looking for a peaceful, growing community? Known for its affordable living and proximity to universities and natural attractions, 
                      Dumaguete is a great spot for peaceful living or investment within a growing area.`,
        image: "/images/ormoc.png",
    },
    {
    city: "Palawan",
    description: `Discover tropical paradise in Palawan. With its pristine beaches, crystal-clear waters, and thriving eco-tourism, 
                  Palawan is a top destination for both vacation homes and investment properties. 
                  Enjoy the beauty of nature and strong long-term potential`,
    image: "/images/palawan.png",
    }
  ];

const Projects = () => {
    return (
        <div>
            {cities.map((cityData, index) => (
                <ProjectsSection key={index} {...cityData} />
            ))}
        </div>
    );
};

export default Projects;