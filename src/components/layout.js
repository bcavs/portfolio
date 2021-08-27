/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import Footer from "./Footer"
import Header from "./Header"
import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

const Layout = ({ title, children, noContainer, styles, minimalHeader }) => {
  console.log("Min: ", minimalHeader)
  return (
    <>
        <SEO title={title} />
        <div style={{
          display: "flex",
          flexFlow: "column",
          minHeight : "100vh"
        }}>
          <Header siteTitle={title || `Hello`} minimalHeader={minimalHeader} />
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
