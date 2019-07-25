import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/Hero"

export const ProjectCard = props => {
  return (
    <li className="projectCard">
      <Link to={props.linkTo} className="projectCard__link">
        <Img
          fluid={props.thumbnail.childImageSharp.fluid}
          alt={props.title}
          className="projectCard__image"
        />
        {props.title}
      </Link>
    </li>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <Hero
        title={data.site.siteMetadata.title}
        tagline={data.site.siteMetadata.tagline}
        headshot={data.file.childImageSharp.fixed}
      />
      <section className="featuredProjects">
        <h3>Featured Projects</h3>
        <ul className="projectList">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectCard
              thumbnail={node.frontmatter.thumbnailImage}
              title={node.frontmatter.title}
              linkTo={node.fields.slug}
              key={node.id}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            thumbnailImage {
              childImageSharp {
                fluid(maxWidth: 630, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    file(relativePath: { eq: "images/headshot2.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        tagline
      }
    }
  }
`
