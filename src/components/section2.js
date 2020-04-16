import React from "react"
import { useStaticQuery, graghpl } from "gatsby"
import Img from "gatsby-image"
import { link } from "gatsby"

const section2 = () => {
  return (
    <div className="section2">
      <div className="container">
        <div className="innersec"></div>
        <div className="content">
          <h2>The Headings</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="btn-row">
            <link to="/work">View More</link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section2
