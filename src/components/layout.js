import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faUserNinja,
  faMugHot,
  faHome,
} from "@fortawesome/free-solid-svg-icons"

const Nav = props => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link"
            activeClassName="nav__link--current"
          >
            <FontAwesomeIcon icon={faHome} /> &nbsp; Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/projects"
            className="nav__link"
            activeClassName="nav__link--current"
            partiallyActive={true}
          >
            <FontAwesomeIcon icon={faCode} />
            &nbsp; Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/blog"
            className="nav__link"
            activeClassName="nav__link--current"
            partiallyActive={true}
          >
            <FontAwesomeIcon icon={faMugHot} />
            &nbsp; Blog
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/about"
            className="nav__link"
            activeClassName="nav__link--current"
          >
            <FontAwesomeIcon icon={faUserNinja} />
            &nbsp; About Me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const Header = props => {
  return (
    <header className="">
      <Nav />
      <div className="hero">
        <div className="hero__headshot">
          {/* <img src="/public/headshot2.jpg" alt="christopher wears a tie" /> */}
          <Img
            fixed={props.headshot}
            alt="christopher wearing a tie"
            className="hero__headshot--rounded"
          />
        </div>
        <div>
          <h1>{props.title}</h1>
          <h2>{props.tagline}</h2>
          <p className="hero__intro">
            I've been building websites for over 20 years. On here you'll see
            projects that I have worked on over the years. Most of my work
            focuses on front-end web development, from mockups to coding.
          </p>
          <Link to="/projects" className="hero__button">
            See All Projects
          </Link>
        </div>
      </div>
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
        file(relativePath: { eq: "images/headshot2.jpg" }) {
          childImageSharp {
            fixed(width: 300, quality: 90) {
              ...GatsbyImageSharpFixed
            }
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
        headshot={data.file.childImageSharp.fixed}
      />
      {children}
    </div>
  )
}

export default Layout
