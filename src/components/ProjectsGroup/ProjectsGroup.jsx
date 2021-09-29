import './ProjectsGroup.scss';

import AubryLane from "../../images/project-screenshots/Other/Aubry-Lane.png"
import Blog from "../../images/project-screenshots/Grubhub/Blog.png"
import Corporate from "../../images/project-screenshots/Grubhub/Corporate.png"
import DailyDigi from "../../images/project-screenshots/Other/Daily-Digi.png"
import Driver from "../../images/project-screenshots/Grubhub/Driver.png"
import Dunbar from "../../images/project-screenshots/Other/Dunbar.png"
import Get from "../../images/project-screenshots/Grubhub/Get.png"
import Javahouse from "../../images/project-screenshots/HFPG/Javahouse.png"
import { Link } from 'gatsby';
import LinkingPark from "../../images/project-screenshots/Grubhub/Linking-Park.png"
import PromiseBev from "../../images/project-screenshots/HFPG/Promise.png"
import React from 'react';
import RestaurantHER from "../../images/project-screenshots/Grubhub/RestaurantHER.png"
import Splenda from "../../images/project-screenshots/HFPG/Splenda.png"
import Vault from "../../images/project-screenshots/Other/The-Vault.png"

// import PropTypes from 'prop-types';

const projects = [
  {
    name: "Grubhub",
    description:"Web Developer\u2014Marketing",
    images:[
      { imageSrc: Blog },
      { imageSrc: Driver },
      { imageSrc: LinkingPark },
      { imageSrc: Corporate },
      { imageSrc: Get },
      { imageSrc: RestaurantHER },
    ],
    link: "/grubhub"
  },
  {
    name: "Heartland FPG",
    description:"Web Developer",
    images:[
      { imageSrc: Splenda },
      { imageSrc: Javahouse },
      { imageSrc: PromiseBev },
    ],
    link: "/hfpg"
  },
  {
    name: "Freelance/Personal",
    description:"Other projects I worked on for contracts or for fun",
    images:[
      { imageSrc: AubryLane },
      { imageSrc: Dunbar },
      { imageSrc: Vault },
      { imageSrc: DailyDigi },
    ],
    link: "/other"
  }
]

const ProjectsGroup = (props) => (
  <div className="projects-group container grid ">
    {projects.map((project, i) => {
      return(
        <Link to={project.link} className="project" key={i}>
          <div 
            className="project-image-container" 
            >
            {project.images.map((image, j) => {
              if( j <= 5 ){
                const randomRotate = (Math.random() * 16) - 5
                const randomOffset = (Math.random() * 11) - 5
                return(
                  <img 
                    className={`project-image ${j === 0 ? "front" : "back"}-image`} 
                    src={image.imageSrc} 
                    alt={`${project.name}`}
                    key={j}
                    style={{
                      transform: `rotate(${j !== 0 ? randomRotate : "0"}deg)`, 
                      top: `${j !== 0 ? randomOffset : "0"}px`, 
                    }}  
                  />
                )
              }
              return null
            })}
          </div>
          <h3 className="uppercase font-bold text-electric-purple">{project.name}</h3>
          <p>{project.description}</p>
        </Link>
      )
    })}
  </div>
);

// ProjectsGroup.propTypes = {
//   // bla: PropTypes.string,
// };

// ProjectsGroup.defaultProps = {
//   // bla: 'test',
// };

export default ProjectsGroup;
