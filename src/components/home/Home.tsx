import React from "react"
import AboutMe from "./components/AboutMe/AboutMe"
import SummaryCardList from "./components/SummaryCard/SummaryCardList"
import "./Home.scss"

const Home: React.FC = () => {
  return (
    <div className="Home">
      <AboutMe />
      <SummaryCardList />
      <div style={{ marginLeft: `-15px`, marginRight: `-15px` }}>
        <svg
          style={{ padding: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 900 600"
          width="100%"
          height="auto"
          version="1.1"
        >
          <path
            d="M0 506L21.5 486.3C43 466.7 86 427.3 128.8 423.3C171.7 419.3 214.3 450.7 257.2 452C300 453.3 343 424.7 385.8 428C428.7 431.3 471.3 466.7 514.2 481.2C557 495.7 600 489.3 642.8 469.3C685.7 449.3 728.3 415.7 771.2 409.7C814 403.7 857 425.3 878.5 436.2L900 447L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="miter"
          />
        </svg>
      </div>
    </div>
  )
}

export default Home
