/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import SocialButtons from "./SocialButtons"

import SEO from "./seo"
import ContactModal from "./ContactModal/ContactModal"
import { ContactFormContextProvider } from "../context"

const Layout = ({ title, children, noContainer, styles }) => {
  return (
    <>
      <ContactFormContextProvider>
        <SEO title={title} />
        <ContactModal />
        <div style={{
          display: "flex",
          flexFlow: "column",
          minHeight : "100vh"
        }}>
          <Header siteTitle={title || `Hello`} />
          <div
            style={{
              margin: `0 ${noContainer ? "0" : "auto"}`,
              padding: `0 0rem 5rem`,
              position:"relative",
              flex:'1',
              ...styles
            }}
            className={`${noContainer ? "noContainer" : "container"}`}
            >
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </ContactFormContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
