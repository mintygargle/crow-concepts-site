/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "../style.scss"
import { Header, Footer } from "./Nav/nav_index"
import { ThemeProvider } from "styled-components"
import theme from "../theme"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Header></Header>
        <div>
          <main>{children}</main>

          <Footer></Footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
