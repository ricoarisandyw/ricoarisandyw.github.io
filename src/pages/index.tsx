import * as React from "react"
import html2canvas from "html2canvas"
import "../css/styles.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Image from "../components/Image"

const IndexPage: React.FC = () => {
  function downloadCV(): void {
    window.scrollTo(0, 0)
    setTimeout(() => {
      const capture = document.querySelector(`#capture`)
      const capture2 = document.querySelector(`#capture2`)
      if (capture && capture2) {
        html2canvas(capture as HTMLElement).then((canvas) => {
          document.body.appendChild(canvas)
        })
        html2canvas(capture2 as HTMLElement).then((canvas) => {
          document.body.appendChild(canvas)
        })
      }
    }, 1000)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ padding: `50px` }}>
          <div className="col-xl-6 mb-3">
            <div id="capture" className="row m-auto">
              <div className="col-sm-5 firstPageContainer">
                <Image src={`34.jpg`} alt="fotoku" style={{ width: `100%` }} />
                <div className="mt-3">
                  <strong>CONTACT</strong>
                  <hr className="me-3" />
                  <div className="content">
                    <div>
                      <i className="bi bi-envelope"></i>
                      &nbsp;arisandyrico@gmail.com
                    </div>
                    <div>
                      <i className="bi bi-link-45deg"></i>
                      &nbsp;ricoarisandyw.github.io
                    </div>
                    <div>
                      <i className="bi bi-linkedin"></i>
                      &nbsp;ricoarisandyw
                    </div>
                    <div>
                      <i className="bi bi-whatsapp"></i>
                      &nbsp;+6287864226576
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <strong>EDUCATION</strong>
                  <hr className="me-3" />
                  <div className="content">
                    <div>
                      <strong>Bachelor of Computer Science</strong>
                      <br />
                      <small>at The Electronic Engineering Polytechnic Institute of Surabaya</small>
                    </div>
                  </div>
                </div>
                <div className="skillsContainer">
                  <strong>SKILLS</strong>
                  <hr />
                  <div className="content">
                    <div>
                      <strong>Proffesional</strong>
                      <br />
                      <small>Scrum, English Language, Adobe XD, Video Editing, UI Design, Trello</small>
                    </div>
                    <div>
                      <strong>Hobby</strong>
                      <br />
                      <small>Drawing, Playing Music, Blogging, Gardening</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="p-3">
                  <h3>
                    <strong>RICO</strong>
                    <br />
                    ARISANDY WIJAYA
                  </h3>
                  <strong>FULLSTACK DEVELOPER</strong>
                  <hr />
                  <div className="content">
                    <small>
                      I love tech because it give real solution and fastest way to fix the world. I have become a
                      programmer almost 4 year counted from my first paid project.
                    </small>
                  </div>
                  <div className="mt-3">
                    <strong>WORK EXPERIENCES</strong>
                    <hr />
                    <div className="content">
                      <div>
                        <strong>ICON+</strong>
                        <br />
                        <span style={{ textDecoration: `underline` }}>2019-2020 as Software Developer</span>
                        <br />
                        <small>
                          I create Dashboard with comment feature. then create Artifical Intelligence to decide position
                          of employee.
                        </small>
                      </div>
                      <div>
                        <strong>Xaltius</strong>
                        <br />
                        <span style={{ textDecoration: `underline` }}>2020-2021 as Frontend Developer</span>
                        <br />
                        <small>
                          First project is Ship Logistic System. Then create apps to create Food Calories Detection App.
                          My last project here was Online School system, included with Mini Game and Video Conference.
                        </small>
                      </div>
                      <div>
                        <strong>Dateideas</strong>
                        <br />
                        <span style={{ textDecoration: `underline` }}>2021 as Fullstack Developer</span>
                        <br />
                        <small>
                          I learn a lot about how Startup works here. I add feature to main product that are contact
                          information, cron job email, log & bug tracking.{` `}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <strong>REFERENCES</strong>
                    <hr />
                    <div className="row content text-center">
                      <div className="col-sm-6">
                        <strong>Aditya</strong>
                        <br />
                        CTO of Xaltius Tech
                      </div>
                      <div className="col-sm-6">
                        <strong>Arvind</strong>
                        <br />
                        CTO of Dateideas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div id="capture2" className="row m-auto">
              <div className="col-sm-2 projectContainer">
                <div className="projectTitle">PROJECTS</div>
              </div>
              <div className="col-sm-10">
                <div className="p-3">
                  <strong>FRONTEND DEVELOPER</strong>
                  <hr />
                  <div className="content">
                    <small>
                      ReactJS, AngularJS, Scss, Webpack, Laravel Blade, Gatsbyjs, Nextjs, S3 Webstatic, Android, Kotlin,
                      Flutter, React Native
                    </small>
                    <br />
                    <strong>Projects :</strong>
                    <div className="row">
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Dashboard</li>
                          <li>Worker Placement Management</li>
                          <li>Logistic Portal</li>
                          <li>Food Calories Detector</li>
                          <li>Online School</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Marketplace</li>
                          <li>Company Profile</li>
                          <li>Chat Apps</li>
                          <li>Questionaire Android Library</li>
                          <li>Event Notification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <strong>BACKEND DEVELOPER</strong>
                  <hr />
                  <div className="content">
                    NodeJS, Laravel, CI, Spring, Flask
                    <br />
                    <strong>Projects :</strong>
                    <div className="row">
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>LINE Chatbot</li>
                          <li>Logistic Backend</li>
                          <li>Implement Payment Gateway</li>
                          <li>Mailgun</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Logging & Bug report</li>
                          <li>Data streaming</li>
                          <li>Keycloak</li>
                          <li>Firebase</li>
                          <li>SQL & NoSQL DB</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <strong>DEV OPS</strong>
                  <hr />
                  <div className="content">
                    Docker, AWS, Heroku
                    <br />
                    <strong>Projects :</strong>
                    <div className="row">
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Microservice</li>
                          <li>Deploy to Beanstalk</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Deploy to Heroku</li>
                          <li>CI/CD Github</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <strong>ACHIEVEMENT</strong>
                  <hr />
                  <div className="content">
                    <strong>Projects :</strong>
                    <div className="row">
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Funding : Crowd Simulator using Celullar Automata</li>
                          <li>Funding : Quantum Levitation Car Concept</li>
                          <li>Certified : Advance Android Developer</li>
                          <li>Funding : Money Management Apps</li>
                          <li>Funding : Brainbow (Question Generator)</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul style={{ fontSize: `8pt` }}>
                          <li>Paper Publication : Knowledge Based Recognition</li>
                          <li>Winner : Warung Pintar Hackathon</li>
                          <li>Certified : Basic IOS Developer from Dicoding</li>
                          <li>Certified : Basic AWS from Dicoding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button onClick={downloadCV} className="m-auto btn btn-success">
            DOWNLOAD
          </button>
        </div>
      </div>
    </>
  )
}

export default IndexPage
