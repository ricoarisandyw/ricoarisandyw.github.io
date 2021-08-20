import React from "react"
import SummaryCard from "./SummaryCard"

const bgAndroid = `https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_960_720.jpg`
const bgFrontend = `https://cdn.pixabay.com/photo/2015/08/28/11/37/painting-911804_960_720.jpg`
const bgBackend = `https://cdn.pixabay.com/photo/2019/01/30/07/45/web-3963945_960_720.jpg`

const SummaryCardList: React.FC = () => {
  return (
    <div style={{ paddingBottom: `2rem` }}>
      <h1 className="text-center">Summary</h1>
      <div className="row justify-content-center">
        <SummaryCard title="Android" size={6} bg={bgAndroid} />
        <SummaryCard title="Backend" size={7} bg={bgFrontend} />
        <SummaryCard title="Android" size={8} bg={bgBackend} />
      </div>
    </div>
  )
}

export default SummaryCardList
