import { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <button 
      className={`hamburger-menu ${isOpen ? 'open' : ''}`} 
      onClick={handleClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
}

export default HamburgerMenu;