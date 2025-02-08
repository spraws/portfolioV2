import ThemeToggle from '../theme-toggle/ThemeToggle';
import "./drop-down.css"; 
import PropTypes from 'prop-types';

function DropDown({ isOpen }) {
    return (
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
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
};

export default DropDown;