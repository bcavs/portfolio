import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { HiMail } from "react-icons/hi";

import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header className="bg-dark-blue py-5 px-3 flex justify-center">
    <div className="header-content-container || container items-center md:items-start justify-items-center">
      <div id="personal-info" className="md:justify-self-start">
        <div className="about-me">
          <h1 className="text-white uppercase font-bold text-3xl">Ben Cavenagh</h1>
          <h3 className="text-gray-400">
            <span className="uppercase">Web Developer</span>
            {" "} at {" "} 
            <span className="text-red-500 uppercase font-bold">Grubhub</span>
          </h3>
        </div>
        <div className="favorite-tools">
          <p className="text-sky-blue font-bold text-sm text-center md:text-left">Some of my favorite tools:</p>
          <div className="tool-logos-container justify-center md:justify-start">
            <div className="tool"></div>
            <div className="tool"></div>
            <div className="tool"></div>
          </div>
        </div>
      </div>
      <div id="logo" className="">
        <StaticImage
          src="../../images/BCLogo-White-Shadowed-Cropped.png"
          width={200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Ben Cavenagh Logo"
        />
      </div>
      <div id="nav-links" className="md:justify-self-end">
        <p className="bg-sky-blue text-dark-blue px-2 py-1 rounded font-bold">Contact me <HiMail className="mail-icon"/></p>
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
