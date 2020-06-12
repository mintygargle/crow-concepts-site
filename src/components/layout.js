import React from "react"
import PropTypes from "prop-types"

import "../style.scss"
import { Header, Footer } from "./Nav/nav_index"
import { ThemeProvider } from "styled-components"
import theme from "../theme"

const Layout = ({ children }) => {
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
