import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import "./theme-button.css"; 
import DropDown from '../DropDown/DropDown';

function ThemeButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='theme-btn' onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faCircleHalfStroke} />
      </button>
      <DropDown isOpen={isOpen} />
    </div>
  );
}

export default ThemeButton;