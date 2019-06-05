import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviewRoll from '../components/preview-roll'
import Animate from "../components/animate"
import "./style.css"

const IndexPage = ({ data }) => {
  const blog = data.blog
  const events = data.events
  const store = data.store

  return (
    <Layout>
      <SEO title="Home" />
      <Animate/>
      <h2>Blog</h2>
      <PreviewRoll
        itemWidth="50%"
        postData={blog}
      />

      <h2>Classes</h2>
      <p>Attend one of our classes or events.</p>
      <PreviewRoll
        itemWidth="100%"
        postData={events}
      />

      <h2>store</h2>
      <p>Check out our store of useful components and code snippets</p>
      <PreviewRoll
        itemWidth="50%"
        postData={store}
      // totalCount={props.totalCount}
      />

    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query{
  site {
     siteMetadata {
       title
       description
     }
  }
  blog: allMarkdownRemark(                  
    filter: { fileAbsolutePath: {regex: "\/blog/"}}
  ) {
      edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
      }
    }
  }

  events: allMarkdownRemark(                  
    filter: { fileAbsolutePath: {regex: "\/events/"}}
  ) {
      edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
      }
    }
  }

  store: allMarkdownRemark(                  
    filter: { fileAbsolutePath: {regex: "\/store/"}}
  ) {
      edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
      }
    }
  }
}
`