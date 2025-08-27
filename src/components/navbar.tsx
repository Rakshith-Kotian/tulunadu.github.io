import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/language">Language</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/cuisine">Cuisine</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
