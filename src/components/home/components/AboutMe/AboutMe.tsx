import React from "react"
import Image from "../../../Image"
import "./AboutMe.scss"

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
      <div className="about-me-description">
        HELLO, I'M
        <hr />
        <h1 className="super-bold" data-aos="fade-up">
          RICO
        </h1>
        <h2 className="super-bold" data-aos="fade-up">
          ARISANDY WIJAYA
        </h2>
        <hr />
        SOFTWARE DEVELOPER
        <br />
        <br />
        <p data-aos="fade-up">
          All begin when math with art become one. That's how I decide to become software developer. It's not just how
          data flowing, but it also about how to get user acquisition.
        </p>
      </div>
      <div className="about-me-image">
        <div className="bg blob-2" />
        <div className="bg blob-1" />
        <Image src="ricoaw.png" alt="ricoaw" style={{}} />
      </div>
    </div>
  )
}

export default AboutMe
