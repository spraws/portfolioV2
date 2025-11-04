import './nav.css';
import ThemeButton from '../theme-btn/ThemeButton';
import DropDown from '../DropDown/DropDown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HamburgerMenu from '../hamburger/HamburgerMenu';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (isOpen) => {
    setMenuOpen(isOpen);
  };

  return (
    <nav className="nav">
      <ul>
        <li className="logo">
          <Link to="/">jonty.info</Link>
        </li>
        <HamburgerMenu onToggle={toggleMenu} />
        <div className={`nav-list ${menuOpen ? 'nav-active' : ''}`}>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <ThemeButton />
            <DropDown />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;