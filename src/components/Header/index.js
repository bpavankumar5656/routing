// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="bg-container">
    <div className="container">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="img"
        />
        <h1 className="heading">Wave</h1>
      </div>
      <div className="txt-container">
        <h1 className="heading">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="heading">
          <Link to="/about">About</Link>
        </h1>
        <h1 className="heading">
          <Link to="/contact">Contact</Link>
        </h1>
      </div>
    </div>
  </div>
)

export default Header
