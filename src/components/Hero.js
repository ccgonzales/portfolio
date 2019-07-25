import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Hero = props => {
  return (
    <div className="hero">
      <div className="hero__headshot">
        {/* <img src="/public/headshot2.jpg" alt="christopher wears a tie" /> */}
        <Img
          fixed={props.headshot}
          alt="christopher wearing a tie"
          className="hero__headshot--rounded"
        />
      </div>
      <div className="hero__info">
        <h1>{props.title}</h1>
        <h2>{props.tagline}</h2>
        <p className="hero__intro">
          Hi! I build web apps. On here you'll see projects that I have worked
          on over the years. Most of my work focuses on front-end web
          development, from mockups to coding.
        </p>
        <Link to="/projects" className="hero__button">
          See All Projects
        </Link>
      </div>
    </div>
  )
}

export default Hero
