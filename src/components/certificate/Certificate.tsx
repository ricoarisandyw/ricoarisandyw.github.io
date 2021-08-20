import React from "react"
import Image from "../Image"
import "./Certificate.scss"

const Certificate = () => {
  return (
    <div className="Certificate">
      <h1 className="text-center p-4">Certificate</h1>
      <div className="marquee-container">
        <div className="marquee">
          <div className="item">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="item shadow">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="item shadow">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="item shadow">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="item shadow">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
          <div className="item shadow">
            <Image
              alt="certificate"
              src="certificate/sertifikat_course_261_5717_200821132522_page-0001.jpg"
              style={{ width: `100%`, objectFit: `cover` }}
            />
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <span className="btn-beauty">CHECK MORE</span>
      </div>
    </div>
  )
}

export default Certificate
