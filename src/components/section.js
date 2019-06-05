import React from "react"

const Section = ({ children }) => (
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
         
        </div>
)

export default Section
