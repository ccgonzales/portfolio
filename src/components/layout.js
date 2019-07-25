import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./Nav"

const Header = props => {
  return (
    <header className="">
      <Nav />
    </header>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            tagline
          }
        }
      }
    `
  )
  return (
    <div className="">
      <Header
        title={data.site.siteMetadata.title}
        tagline={data.site.siteMetadata.tagline}
      />
      {children}
      <footer>&copy; Christopher Gonzales</footer>
    </div>
  )
}

export default Layout
