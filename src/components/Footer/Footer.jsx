import './Footer.scss';

import React from 'react';
// import PropTypes from 'prop-types';
import SocialButtons from "../SocialButtons";

const Footer = (props) => (
  <div className=" bg-dark-blue text-white ">
    <div className="footer container">
      <div>
        ©{new Date().getFullYear()}, Ben Cavenagh 🤓
      </div>
      <div className="social-container "><SocialButtons type="footer" /></div>
    </div>
  </div>
);

// Footer.propTypes = {
//   // bla: PropTypes.string,
// };

// Footer.defaultProps = {
//   // bla: 'test',
// };

export default Footer;
