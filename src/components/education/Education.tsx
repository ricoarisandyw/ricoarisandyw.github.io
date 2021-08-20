import React from "react"
import EducationCard from "./components/EducationCard/EducationCard"

const Education = () => {
  return (
    <div style={{ padding: `2rem` }}>
      <h1 className="text-center mb-3">Education</h1>
      <div>
        <EducationCard
          title="Multimedia Academic (ITS)"
          year="2012 - 2015"
          description={`My final project is create food packaging with fruit shape. using coreldraw`}
        />
        <EducationCard
          title="Bachelor of Computer Science (PENS)"
          year="2015 - 2019"
          description={`My final project is create Chatbot for Campus using Context Recognition`}
        />
      </div>
    </div>
  )
}

export default Education
