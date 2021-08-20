import React from "react"
import { Forest1, Mountain1, Mountain2, Mountain3 } from "./components/SVG"
import "./Project.scss"
import ProjectList from "../../utils/project-list"

const Project = () => {
  const projectList = ProjectList.map((project: string) => (
    <li>
      <div className="bubble">
        {project}
        <i className="bi bi-arrow-right-circle"></i>
      </div>
    </li>
  ))

  return (
    <div style={{ overflow: `hidden` }}>
      <div className="parallax">
        <div className="forest">{Forest1}</div>
        <div className="mountain-1">{Mountain1}</div>
        <div className="mountain-2">{Mountain2}</div>
        <div className="mountain-3">{Mountain3}</div>
      </div>
      <div className="Project p-5">
        <div className="pb-5">
          <hr className="neon" />
          <h1 className="text-center neon">Project</h1>
          <hr className="neon" />
        </div>
        <div className="mask-gradient">{projectList}</div>
        <div className="text-center pt-5">
          <span className="btn-neon neon">MORE</span>
        </div>
      </div>
    </div>
  )
}

export default Project
