import './nav.css';
import './nav.css';
import ThemeButton from '../theme-btn/ThemeButton';


function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="logo">
          <a href="#home">jonty.info</a>
        </li>
        <div className="nav-list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
          <li>
            <ThemeButton />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;