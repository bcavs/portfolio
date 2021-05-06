import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

import './SocialButtons.scss';

const SocialButtons = (props) => (
  <div className="floating-social-container">
    <div className="social-logo-container">
      <FaFacebook/>
    </div>
    <div className="social-logo-container">
      <FaLinkedin/>
    </div>
    <div className="social-logo-container">
      <FaGithub/>
    </div>
  </div>
);

SocialButtons.propTypes = {
  // bla: PropTypes.string,
};

SocialButtons.defaultProps = {
  // bla: 'test',
};

export default SocialButtons;
