import React from "react"
import "./Experience.scss"

const Experience = () => {
  return (
    <div className="Experience">
      <h1 className="text-center mb-4">Experience</h1>
      <div className="glass">
        <div data-aos="zoom-out-down">
          <h3 className="super-bold">2019 - 2020</h3>
          <strong>ICON+ PLN Jakarta</strong>
          <p>Work as Software developer. Built Dashboard & Machine Learning</p>
          <hr />
        </div>
        <div data-aos="zoom-out-down">
          <h3 className="super-bold">2020 - 2021</h3>
          <strong>Xaltius Singapore</strong>
          <p>Work as Frontend Developer. Build Logistic, Scanner App, Online School</p>
          <hr />
        </div>
        <div data-aos="zoom-out-down">
          <h3 className="super-bold">2021</h3>
          <strong>Dateideas Singapore</strong>
          <p>Work as Fullstack Developer. Build email feature, contact information, logging</p>
          <hr />
        </div>
        <div data-aos="zoom-out-down">
          <h3 className="super-bold">2021 - Current</h3>
          <strong>Sprout Singapore</strong>
          <p>Work as Fullstack Developer.</p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Experience
