import React from 'react';
import PropTypes from 'prop-types';
import './ProjectsGroup.scss';

// Grubhub Images
import Corporate from "../../images/project-screenshots/Grubhub/Corporate.png"
import Driver from "../../images/project-screenshots/Grubhub/Driver.png"
import Get from "../../images/project-screenshots/Grubhub/Get.png"
import LinkingPark from "../../images/project-screenshots/Grubhub/Linking-Park.png"
import RestaurantHER from "../../images/project-screenshots/Grubhub/RestaurantHER.png"
import Blog from "../../images/project-screenshots/Grubhub/Blog.png"

// HFPG Images
import Javahouse from "../../images/project-screenshots/HFPG/Javahouse.png"
import PromiseBev from "../../images/project-screenshots/HFPG/Promise.png"
import Splenda from "../../images/project-screenshots/HFPG/Splenda.png"

// Other Project Images
import AubryLane from "../../images/project-screenshots/Other/Aubry-Lane.png"
import DailyDigi from "../../images/project-screenshots/Other/Daily-Digi.png"
import Dunbar from "../../images/project-screenshots/Other/Dunbar.png"
import Vault from "../../images/project-screenshots/Other/The-Vault.png"
import { Link } from 'gatsby';

const projects = [
  {
    name: "Foxtrot",
    description:"Front-end Engineer",
    images:[
      { imageSrc: 'https://res.cloudinary.com/da9lbyiyl/image/upload/v1671559641/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.06.21_PM_chjwtk.png' },
      { imageSrc: 'https://res.cloudinary.com/da9lbyiyl/image/upload/v1671560268/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.16.08_PM_htwezv.png' },
    ],
    link: "/foxtrot"
  },
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
      { imageSrc: "https://res.cloudinary.com/da9lbyiyl/image/upload/v1671560812/Work%20Site%20Screenshots/Screenshot_2022-12-20_at_12.26.45_PM_d4bk08.png" },
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
                    key={j}
                    style={{
                      transform: `rotate(${j != 0 ? randomRotate : "0"}deg)`, 
                      top: `${j != 0 ? randomOffset : "0"}px`, 
                    }}  
                  />
                )
              }
            })}
          </div>
          <h3 className="uppercase font-bold text-electric-purple">{project.name}</h3>
          <p>{project.description}</p>
        </Link>
      )
    })}
  </div>
);

ProjectsGroup.propTypes = {
  // bla: PropTypes.string,
};

ProjectsGroup.defaultProps = {
  // bla: 'test',
};

export default ProjectsGroup;
