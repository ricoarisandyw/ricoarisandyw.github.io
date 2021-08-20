import React from "react"
import "./EducationCard.scss"

interface Props {
  title: string
  year: string
  description: string
}

const EducationCard: React.FC<Props> = (props) => {
  return (
    <div className="EducationCard" data-aos="fade-right">
      <div className="timeline" />
      <div className="content flex-grow-1">
        <h2 className="color-green">{props.title}</h2>
        <small className="mb-5">{props.year}</small>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default EducationCard
