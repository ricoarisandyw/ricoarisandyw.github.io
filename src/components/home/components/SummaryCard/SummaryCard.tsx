import React from "react"
import "./SummaryCard.scss"

interface Props {
  title: string
  size: number
  bg: string
}

function emptyArray(size: number) {
  const arr = []
  for (let i = 1; i <= size; i++) {
    arr.push(i)
  }
  return arr
}

const SummaryCard: React.FC<Props> = (props) => {
  // 7
  // 1,2,3,4,5
  // 1*2 = 2
  // 2*2 = 4
  // 3*2 = 6
  // 4*2 = 8

  const stars = emptyArray(5).map((a, i) => {
    if (a * 2 <= props.size) return <i className="bi bi-star-fill"></i>
    else if (a * 2 - 1 === props.size) return <i className="bi bi-star-half"></i>
    else return <i className="bi bi-star"></i>
  })

  return (
    <div className="SummaryCard" data-aos="flip-left">
      <div className="content" style={{ backgroundImage: `url('${props.bg}')` }}>
        <h2 className="super-bold">{props.title}</h2>
        {stars}
        <div className="size"></div>
        <div className="detail">
          <div className="btn-glass">
            <strong>DETAIL</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
