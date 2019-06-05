import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import './style.css'

export default (props) => {
  return (
    <div className="preview-roll">
      <h2>{props.title}</h2>
      <p style={{ textAlign: `center`}}>{props.description}</p>

      <Row className="row">
        {props.postData.edges.map(({ node }) => {
          return (
            <Col xs="12" sm="6" md={props.itemWidth} className={props.class}>
              <Link
                to={node.fields.slug}
                className="link"
              >
                <div className="roll-item">
                  <h3>{node.frontmatter.title}</h3>
                  <h5>{node.frontmatter.date}</h5><br />
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            </Col>
          )
        })}

      </Row>
    </div>
  )
}