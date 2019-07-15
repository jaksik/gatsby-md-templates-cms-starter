import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviewRoll from '../components/preview-roll'
import CoverImg from "../components/cover-img"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

const IndexPage = ({ data }) => {
  const blog = data.blog
  const events = data.events
  const store = data.store

  return (
    <Layout>
      <SEO title="Home" />
      <CoverImg 
        img="mountains.JPG"
      />

      <div className="container">
        <PreviewRoll
          title="Blog"
          description=""
          itemWidth="4"
          postData={blog}
        />

        <PreviewRoll
          title="Events"
          description="Attend one of our events."
          itemWidth="12"
          postData={events}
        />

        <PreviewRoll
          title="Products"
          description="Check out our store of useful components and code snippets."
          itemWidth="6"
          postData={store}
        // totalCount={props.totalCount}
        />
      </div>


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