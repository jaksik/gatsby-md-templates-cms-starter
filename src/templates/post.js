import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"


export default ({ data }) => {
  const post = data.markdownRemark
 
  return (
    <Layout>
      <div className="container page">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
   }
  }
`

//   featuredimage {
      //     childImageSharp {
      //       resize(width: 1500, height: 1500) {
      //         src
      //       }
      //       fluid(maxWidth: 786) {
      //         ...GatsbyImageSharpFluid
      //       }
      //     }
      //  }