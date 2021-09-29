import './SocialButtons.scss';

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

import React from 'react';

const SocialButtons = (props) => (
  <div className={`floating-social-container social-buttons-${props.type}`}>
    <a href="https://www.facebook.com/ben.cavenagh/">
      <div className="social-logo-container">
          <FaFacebook/>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/ben-cavenagh/">
      <div className="social-logo-container">
          <FaLinkedin/>
      </div>
    </a>
    <a href="https://github.com/bcavs">
      <div className="social-logo-container">
          <FaGithub/>
      </div>
    </a>
  </div>
);

export default SocialButtons;
