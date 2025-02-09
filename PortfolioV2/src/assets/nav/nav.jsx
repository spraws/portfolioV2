import './nav.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ThemeButton from '../theme-btn/ThemeButton';
import DropDown from '../DropDown/DropDown';
import Projects from '../../pages/projects/projects.jsx';

function Nav() {
  return (
    <Router>
      <nav className="nav">
        <ul>
          <li className="logo">
            <Link to="/">jonty.info</Link>
          </li>
          <div className="nav-list">
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
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default Nav;