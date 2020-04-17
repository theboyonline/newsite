import React from "react"
import Scrollbar from "smooth-scrollbar"
//scss
import "../styles/styles.scss"
import Header from "../components/header"
import Banner from "../components/banner"
import SecondSec from "../components/SecondSec"
import Thirdsec from "../components/Thirdsec"
const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <SecondSec />
    <Thirdsec />
  </div>
)

export default IndexPage
