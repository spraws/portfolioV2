import React, { useEffect, useRef } from 'react';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import "./drop-down.css"; 
import PropTypes from 'prop-types';

function DropDown({ isOpen, onClose }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="theme-options">
        <ThemeToggle theme="light" />
        <ThemeToggle theme="dark" />
        <ThemeToggle theme="amoled" />
      </div>
    </div>
  );
}

DropDown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DropDown;