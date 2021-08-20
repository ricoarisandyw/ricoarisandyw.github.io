import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import React from "react"
import "./Navbar.scss"

const Header: React.FC = () => {
  const [headerClass, setHeaderClass] = React.useState(`navbar`)

  useScrollPosition(
    (props) => {
      if (props.currPos.y < -100) {
        setHeaderClass(`navbar navbar-scroll`)
      } else {
        setHeaderClass(`navbar`)
      }
    },
    [headerClass]
  )

  return (
    <div className={`navbar ` + headerClass}>
      <div className="logo">
        <span className="logo-item">RICO</span>
      </div>
      <div className="navbar-menu">
        <div className="menu-item active">
          <h1>
            <i className="bi bi-github" />
          </h1>
          <div>Github</div>
        </div>
        <div className="menu-item">
          <h1>
            <i className="bi bi-cash-coin" />
          </h1>
          <div>Hire</div>
        </div>
        <div className="menu-item">
          <h1 className="menu-icon">
            <i className="bi bi-person-circle" />
          </h1>
          <div>Me</div>
        </div>
        <div className="menu-item">
          <h1>
            <i className="bi bi-whatsapp" />
          </h1>
          <div>WA</div>
        </div>
        <div className="menu-item">
          <h1>
            <i className="bi bi-envelope" />
          </h1>
          <div>Email</div>
        </div>
      </div>
    </div>
  )
}

export default Header
