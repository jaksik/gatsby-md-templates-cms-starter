import React from 'react'
import { Link } from 'gatsby'
import './style.css'

export default (props) => {
  console.log("props: ", props.postData.edges)
  return (
    <div>
      {/* <p>Total Count: {props.totalCount}</p> */}
      <div className="row">
        {props.postData.edges.map(({ node }) => {
          console.log("preview Roll: ", node)
          return (
            <div className={props.class} style={{ width: props.itemWidth, float: `left` }}>
              <Link
                to={node.fields.slug}
                className="link"
              >
                <div className="post-list">
                  <h3 style={{}}>{node.frontmatter.title}</h3>
                  <h5 style={{}}>{node.frontmatter.date}</h5><br />
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            </div>
          )
        })}

      </div>
    </div>
  )
}