import React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import PreviewRoll from '../../components/preview-roll'

export default ({ data }) => {
  const props = data.allMarkdownRemark

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>This is the Classes Page!</h1>
            <PreviewRoll
                    itemWidth="100%"
            postData={props}
            totalCount={props.totalCount}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex: "\/classes/"}}
      sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
      edges {
        node {
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
