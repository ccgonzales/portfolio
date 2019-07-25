import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faUserNinja,
  faMugHot,
  faHome,
  faBars,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
  return (
    <React.Fragment>
      {/* <div className="menuContainer">
        <a
          href="#menu"
          id="menu-toggle"
          className="menu-toggle"
          aria-label="Open menu"
        >
          <span className="sr-only">Open menu</span>
          <FontAwesomeIcon icon={faBars} aria-hidden="true" />
        </a>
        <a href="#menu-toggle" className="menu__close--toggle">
          <FontAwesomeIcon icon={faSkullCrossbones} />
        </a>
      </div> */}

      <nav className="main-menu" id="menu">
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
      {/* <a
        href="#menu-toggle"
        className="backdrop"
        tabIndex="-1"
        aria-hidden="true"
        hidden
      ></a> */}
    </React.Fragment>
  )
}
