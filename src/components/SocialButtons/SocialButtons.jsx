import React from 'react';
import { Link } from 'gatsby';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

import './SocialButtons.scss';

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

SocialButtons.propTypes = {
  // bla: PropTypes.string,
};

SocialButtons.defaultProps = {
  // bla: 'test',
};

export default SocialButtons;
