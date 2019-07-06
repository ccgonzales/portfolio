import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faUserNinja,
  faMugHot,
  faHome,
} from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="pages">
      <header className="header">
        <h1 className="header__title">{data.site.siteMetadata.title}</h1>
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/projects" className="nav__link">
                <FontAwesomeIcon icon={faCode} />
                Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                <FontAwesomeIcon icon={faMugHot} />
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <FontAwesomeIcon icon={faUserNinja} />
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
}

export default Layout
