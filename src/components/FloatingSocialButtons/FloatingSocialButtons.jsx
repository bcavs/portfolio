import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

import './FloatingSocialButtons.scss';

const FloatingSocialButtons = (props) => (
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

FloatingSocialButtons.propTypes = {
  // bla: PropTypes.string,
};

FloatingSocialButtons.defaultProps = {
  // bla: 'test',
};

export default FloatingSocialButtons;
