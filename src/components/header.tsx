import { NavLink } from 'react-router-dom';
import './Header.css';
import headerLogo from '/headerlogo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        
        <img src={headerLogo} alt="Tulunadu Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <nav className="header-nav">
          <NavLink to="/language" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Language</NavLink>
          <NavLink to="/culture" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Culture</NavLink>
          <NavLink to="/cuisine" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Cuisine</NavLink>
        </nav>
        <div className="search-container">
          <input type="search" placeholder="Search..." className="search-bar" />
          <button type="submit" className="search-button">🔍</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
