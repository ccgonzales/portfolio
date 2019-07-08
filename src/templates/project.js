import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from "@fortawesome/free-solid-svg-icons"

const Resources = props => {
  // const links = JSON.parse(props.links)
  // for (const item in links) {
  //   if (links.hasOwnProperty(item)) {
  //     console.log(`item: ${item} - value ${links[item]}`)
  //   }
  // }

  return (
    <section>
      {props.github !== null && (
        <a href={props.github}>
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      )}
      <br />
      {props.demo !== null && (
        <a href={props.demo}>
          <FontAwesomeIcon icon={faDesktop} />
          Live Demo
        </a>
      )}
    </section>
  )
}

const Project = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <p>
        <strong>Company: </strong>
        {data.markdownRemark.frontmatter.company}
      </p>
      <Resources
        github={data.markdownRemark.frontmatter.github}
        demo={data.markdownRemark.frontmatter.demo}
        links={data.markdownRemark.frontmatter.links}
      />
      <section
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        company
        github
        demo
        techstack
      }
    }
  }
`
