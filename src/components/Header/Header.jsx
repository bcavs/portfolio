import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Logo from '../../images/svg/BCLogo.svg';
import ReactLogo from '../../images/svg/ReactLogo.svg';
import SassLogo from '../../images/svg/Sass.svg';
import GatsbyLogo from '../../images/svg/Gatsby.svg';

import { HiMail } from "react-icons/hi";

import "./Header.scss"
import SocialButtons from "../SocialButtons";

const Header = ({ siteTitle }) => (
  <header className="bg-dark-blue py-5 px-3 flex justify-center">
    <div className="header-content-container || container items-center md:items-start justify-items-center">
      <div id="personal-info" className="md:justify-self-start">
        <div className="about-me">
          <h1 className="text-white uppercase font-bold text-3xl">Ben Cavenagh</h1>
          <h3 className="text-gray-400">
            <span className="uppercase">Web Developer</span>
            {" "} at {" "} 
            <span className="text-red-500 uppercase font-extrabold">Grubhub</span>
          </h3>
        </div>
        <div className="favorite-tools">
          <p className="text-sky-blue font-bold text-sm text-center md:text-left">Some of my favorite tools:</p>
          <div className="tool-logos-container justify-center md:justify-start mt-1">
            <div className="tool mx-1 md:mx-0 md:mr-2">
              <ReactLogo/>
            </div>
            <div className="tool mx-1 md:mx-0 md:mr-2">
              <SassLogo/>
            </div>
            <div className="tool mx-1 md:mx-0 md:mr-2">
              <GatsbyLogo/>
            </div>
          </div>
        </div>
      </div>
      <div id="logo">
        <Logo/>
      </div>
      <div id="nav-links" className="md:justify-self-end">
        <p className="bg-sky-blue text-dark-blue px-2 py-1 rounded font-bold">Contact me <HiMail className="mail-icon"/></p>
        <SocialButtons />
      </div>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
