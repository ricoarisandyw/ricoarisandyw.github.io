import * as React from "react"
import "../css/styles.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "aos/dist/aos.css"
import AOS from "aos"
import Layout from "../components/core/Layout"
import Home from "../components/home/Home"
import Experience from "../components/experience/Experience"
import Education from "../components/education/Education"
import Project from "../components/project/Project"
import Hire from "../components/hire/Hire"
import Certificate from "../components/certificate/Certificate"

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <Home />
          <Education />
          <Experience />
          <Certificate />
          <Project />
          <Hire />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
