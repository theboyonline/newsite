import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Thirdsec = () => (
  <>
    <div className="Thirdsec">
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Img fluid={data.imagered.childImageSharp.fluid} alt="imagered" />
            <h1>Hi from the Second Section</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="btn">
              <h4>View Series</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Thirdsec

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "imagered.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
