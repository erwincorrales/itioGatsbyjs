/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer';
import "./layout.css"
import styled from "styled-components";

const Layout = ({vh, noFooter, footerAbsolute, children, nohome }) => {
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
    <Div className={vh ? 'd-flex flex-column vh-100' : undefined}>
      <Header nohome={nohome}/>      
        <Main className={vh ? 'd-flex flex-fill': undefined}>{children}</Main>
      {
        !noFooter  && <Footer pAbsolute = {footerAbsolute}/>
      }
    </Div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const Main = styled.main`
  position: relative;
`
const Div = styled.div`
  overflow: hidden;
`